<script>
    import { createCharacter } from '$lib/character.js';
    import Form from '$lib/components/Form.svelte';
    import Input from '$lib/components/Input.svelte';
    import { page } from '$app/stores';

    let godboundName = '';
    let name = '';

    /** @param {CustomEvent} e */
    async function handleSubmit(e) {
        const character = await createCharacter($page.data.user, { godboundName, name });

    }
</script>

<Form title='Create %%YouR%% Character' submit='Create' preventDefault={true} on:submit={handleSubmit}>
    <Input label='Name' bind:value={godboundName} />
    <Input label='Previous Name (optional)' bind:value={name} />
</Form>
