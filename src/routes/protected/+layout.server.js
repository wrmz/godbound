import { getUser } from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {

    if (!locals.user?.authenticated) {
        throw redirect(302, '/sign-in');
    }

    const user = {
        ...locals.user,
        ...await getUser(locals.user.email)
    };

    return {
        user
    }
}
