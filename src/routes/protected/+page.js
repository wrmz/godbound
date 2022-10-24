import { redirect } from '@sveltejs/kit';

/** {import('./$types').PageLoad} */
export async function load({ data }) {
    const user = data.user;

    console.log(data);

    if (!user?.authenticated) {
        console.log('unauthenticated redirect to sign-in');
        throw redirect(302, '/sign-in');
    }

    // return {
    //     user
    // }
}
