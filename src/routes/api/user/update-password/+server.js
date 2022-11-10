import bcrypt from 'bcrypt';
import { connectToDatabase } from '$lib/server/db';

/** @type {import('./$types').RequestHandler} */
export async function POST({ cookies, request, locals }) {
	const data = await request.json();

	if (!locals?.user?.authenticated || !locals?.user?.email) {
		return new Response(
			JSON.stringify({
				message: 'Unauthorized'
			}),
			{
				status: 401
			}
		);
	}

	const password = data.password.trim();
	const isPasswordValid = password.length >= 8 && password.length <= 128;

	if (!isPasswordValid) {
		return new Response(
			JSON.stringify({
				invalid: true,
				message: 'Password must contain 8 or more characters.'
			}),
			{
				status: 401
			}
		);
	}

	const dbConnection = await connectToDatabase();
	const db = dbConnection.db;
	const newToken = crypto.randomUUID();

	await db.collection('users').updateOne(
		{
			email: locals.user.email
		},
		{
			$set: {
				token: newToken,
				password: await bcrypt.hash(password, 10),
				updated_date: new Date()
			}
		}
	);

	cookies.set('session_id', newToken, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: process.env.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24 * 30
	});

	return new Response(JSON.stringify(data), {
		status: 200
	});
}
