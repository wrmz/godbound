<script>
    import { createEventDispatcher } from 'svelte';
    import Checkbox from '$lib/components/Checkbox.svelte';

    const dispatch = createEventDispatcher();

    export let checked = false;
    export let name = '';

    function handleSubmit() {
        const formData = {};
        formData[name] = checked;
        dispatch('submit', formData);
    }
</script>

<form
    class='s-checkbox'
    on:submit|preventDefault={handleSubmit}
>
    <Checkbox {name} bind:checked on:change={handleSubmit}>
        <slot></slot>
    </Checkbox>
</form>

<style>

</style>
