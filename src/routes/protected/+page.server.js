import { getUser } from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent, request, locals }) {

    if (!locals.user?.authenticated) {
        console.log('redirecting to sign-in');
        throw redirect(302, '/sign-in');
    }

    const user = {
        ...locals.user,
        ...await getUser(locals.user.email)
    };

    console.log(user);

    return {
        user
    }
}
