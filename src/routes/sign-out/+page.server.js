import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	throw redirect(302, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		cookies.set('session_id', '', {
			path: '/',
			expires: new Date(0)
		});

		throw redirect(302, '/sign-in');
	}
};
