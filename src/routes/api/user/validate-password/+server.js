import { invalid, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { connectToDatabase } from '$lib/server/db';

/** @type {import('./$types').RequestHandler} */
export async function POST ({ request, locals , cookies}) {
    const dbConnection = await connectToDatabase();
    const db = dbConnection.db;
    const { email, password } = await request.json();
    const isPasswordValid = password.length >= 8 && password.length <= 128;

    if (!isPasswordValid) {
        return new Response(JSON.stringify({
            message: 'Incorrect current password.',
            credentials: true,
        }), {
            status: 401,
        });
    }

    const user = await db.collection('users').findOne({ email });

    if (!user) {
        return new Response(JSON.stringify({
            message: 'Incorrect current password.',
            credentials: true,
        }), {
            status: 401,
        });
    }

    const userPassword = await bcrypt.compare(password, user.password);

    if (!userPassword) {
        return new Response(JSON.stringify({
            message: 'Incorrect current password.',
            credentials: true,
        }), {
            status: 401,
        });
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

    return new Response(JSON.stringify({
        message: 'Success',
    }), {
        status: 200
    });
}
