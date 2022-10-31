import { redirect } from '@sveltejs/kit';

/** {import('./$types').PageLoad} */
export async function load({ data }) {
    const user = data.user;

    if (!user?.authenticated) {
        throw redirect(302, '/sign-in');
    }
}
