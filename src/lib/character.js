class Character {
    #id;
    #attributes = {
        strength: {
            value: 0,
        },
        dexterity: {
            value: 0,
        },
        constitution: {
            value: 0,
        },
        wisdom: {
            value: 0,
        },
        intelligence: {
            value: 0,
        },
        charisma: {
            value: 0,
        },
    };

    #savingThrows = {
        hardiness: 0,
        evasion: 0,
        spirit: 0,
    };

    #facts = {
        origins: '',
        profession: '',
        relationship: '',
    };

    /**
     * @param {object} user
     * @param {object} data
     * @param {string} data.godboundName
     * @param {string} data.name
     */
    constructor(user, data) {
        this.#id = crypto.randomUUID();
        this.godboundName = data.godboundName;
        this.name = name;
    }

    /**
     * Retrieves a character belonging to a user
     * @param {string} email
     */
    static async getCharactersByUserEmail(email) {
        try {
            const response = await fetch('/api/character/user');
            const result = response.json();
        } catch (err) {

        }
    }

    /**
     * Saves a character
     * @param {Character} character
     */
    static async save(character) {
        try {
            const response = await fetch('', {
                method: 'POST',
                body: JSON.stringify(character)
            });
        } catch (err) {

        }
    }

    /**
     * Deletes a character
     * @param {string} id - Character id
     */
    static async destroy(id) {
        try {
            const response = await fetch('', {
                method: 'DELETE',
                body: JSON.stringify(id)
            });
        } catch (err) {

        }
    }

    get strength() { return this.#attributes.strength.value; }
    get dexterity() { return this.#attributes.dexterity.value; }
    get constitution() { return this.#attributes.constitution.value; }
    get wisdom() { return this.#attributes.wisdom.value; }
    get intelligence() { return this.#attributes.intelligence.value; }
    get charisma() { return this.#attributes.charisma.value; }
    get hardiness() { return this.#savingThrows.hardiness; }
    get evasion() { return this.#savingThrows.evasion; }
    get spirit() { return this.#savingThrows.spirit; }
    get origins() { return this.#facts.origins; }
    get profession() { return this.#facts.profession; }
    get relationship() { return this.#facts.relationship; }

    async save() {
        Character.save(this);
    }

    async destroy() {
        Character.destroy(this.#id);
    }
}

/**
 * Creates a character
 * @param {object} user
 * @param {object} data
 * @param {string} data.godboundName
 * @param {string} data.name
 * @returns {Promise<Character>}
 */
export async function createCharacter(user, data) {
    const character = new Character(user, data);

    await character.save();

    return character;
}
