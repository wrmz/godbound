// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Attribute {
		name: string,
		value: number,
		modifier: number,
		check: number
	}

	interface Armor {

	}
	interface Character {
		name: string,
		godboundName: string,
		armor: {

		},
		facts: {
			origins: string,
			profession: string,
			relationship: string
		},
		attributes: {
			strength: Attribute,
			dexterity: Attribute,
			constitution: Attribute,
			wisdom: Attribute,
			intelligence: Attribute,
			charisma: Attribute
		},
		savingThrows: {
			hardiness: number,
			evasion: number,
			spirit: number
		}
	}
	interface Locals {
		user: {
			authenticated: boolean;
			email: string;
			username: string;
		},
	}

	interface PageData {}
	interface Error {
		message: string;
		code: string;
	}
	// interface Platform {}
}
