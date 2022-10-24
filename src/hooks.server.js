import { connectToDatabase } from '$lib/server/db';

/**
 * @param {Object} locals
 * @param {Object|null} locals.user
 */
const destroySession = (locals) => {
    locals.user = null;
};

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const token = event.cookies.get('session_id');
    console.log('session:', token);
    if (!token) {
        destroySession(event.locals);
    } else {
        const dbConnection = await connectToDatabase();
        const db = dbConnection.db;
        const userSession = await db.collection('users').findOne({ token });

        if (userSession) {
            console.log('a session exists... with session ID', token);
            console.log('session:', userSession);
            event.locals.user = {
                authenticated: true,
                email: userSession.email,
                username: userSession.username || ''
            };
        } else {
            destroySession(event.locals);
        }
    }

    const response = await resolve(event);

    // Set custom headers
    response.headers.set('x-custom-header', 'potato');

    return response;
}
