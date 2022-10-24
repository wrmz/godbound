// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		user: {
			authenticated: boolean;
			email: string;
			username: string;
		};
	}
	interface PageData {}
	interface Error {
		message: string;
		code: string;
	}
	// interface Platform {}
}
