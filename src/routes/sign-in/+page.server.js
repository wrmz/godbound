import { invalid, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { connectToDatabase } from '$lib/server/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    if (locals.user) {
        throw redirect(302, '/');
    }
}


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const dbConnection = await connectToDatabase();
        const db = dbConnection.db;

        const data = await request.formData()
        const email = data.get('email');
        const password = data.get('password');
        const regexEmail = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,15}$/;
        const isPasswordValid = password.length >= 8 && password.length <= 128;
        const isEmailValid = regexEmail.test(email);

        if (!isPasswordValid || !isEmailValid) {
            return invalid(401, { invalid: true });
        }

        const user = await db.collection('users').findOne({ email });

        if (!user) {
            return invalid(401, { credentials: true });
        }

        const userPassword = await bcrypt.compare(password, user.password);

        if (!userPassword) {
            return invalid(401, { credentials: true });
        }

        const newToken = crypto.randomUUID();

        await db.collection('users').updateOne({ email }, { $set: {
            token: newToken,
            last_online: new Date(),
        } });

        cookies.set('session_id', newToken, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30,
        });

        throw redirect(302, '/');
    }
};
