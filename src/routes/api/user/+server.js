import { connectToDatabase } from '$lib/server/db';

/** @type {import('./$types').RequestHandler} */
export async function GET({ locals }) {
	const dbConnection = await connectToDatabase();
	const db = dbConnection.db;

	if (!locals?.user?.authenticated) {
		return new Response(
			JSON.stringify({
				message: 'Unauthorized'
			}),
			{
				status: 401
			}
		);
	}

	const user = await db.collection('users').findOne({ email: locals.user.email });

	if (!user) {
		return new Response(
			JSON.stringify({
				message: 'User not found'
			}),
			{
				status: 404
			}
		);
	}

	// There's a better way to do this...
	delete user.password;

	return new Response(JSON.stringify(user), {
		status: 200
	});
}
