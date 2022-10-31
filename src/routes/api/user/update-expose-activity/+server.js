import { connectToDatabase } from '$lib/server/db';

/** @type {import('./$types').RequestHandler} */
export async function POST ({ request, locals }) {
    const dbConnection = await connectToDatabase();
    const db = dbConnection.db;
    const data = await request.json();
    const expose_activity = data.expose_activity;

    if (!locals?.user?.authenticated || !locals?.user?.email) {
        return new Response(JSON.stringify({
            message: 'Unauthorized'
        }), {
            status: 401,
        });
    }

    await db.collection('users').updateOne({ email: locals.user.email }, { $set: {
        expose_activity: expose_activity,
        last_online: new Date(),
        updated_date: new Date(),
    } });

    return new Response(JSON.stringify(data), {
        status: 200
    });
}
