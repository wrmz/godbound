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
        const data = await request.formData();
        const username = data.get('username').trim();
        const email = data.get('email').trim();
        const password = data.get('password').trim();

        const regexUsername = /^[\w\.\- ]{3,}$/;
        const regexEmail = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,15}$/;
        const isPasswordValid = password.length >= 8 && password.length <= 128;
        const isUsernameValid = username.length >= 3 && username.length <= 30 && regexUsername.test(username);
        const isEmailValid = regexEmail.test(email);


        if (!isPasswordValid || !isEmailValid || !isUsernameValid) {
            return invalid(401, {
                invalid: true,
                email: !isEmailValid ? 'Email is not a valid email address or contains an invalid character.' : '',
                password: !isPasswordValid ? 'Password must contain 8 or more characters.' : '',
                username: !isUsernameValid ? 'Username must container 3 or more characters and no special characters.' : '',
            });
        }

        const dbConnection = await connectToDatabase();
        const db = dbConnection.db;
        const duplicateEmail = await db.collection('users').findOne({ email });

        if (duplicateEmail) {
            return invalid(401, {
                invalid: true,
                username: 'This email is already registered.'
            });
        }

        await db.collection('users').insertOne({
            username,
            email,
            token: crypto.randomUUID(),
            password: await bcrypt.hash(password, 10),
            last_online: new Date(),
            created_date: new Date(),
            updated_date: new Date(),
        });

        throw redirect(303, '/sign-in');
    }
};
