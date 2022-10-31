<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let name = '';
    export let checked = false;

    /**
     * @fires Checkbox#change
     */
    const handleChange = (event) => {
        dispatch('change', event);
    };
</script>

<div class='checkbox'>
    <input id={name} name={name} type='checkbox' bind:checked on:change|trusted|self|capture={handleChange}>
    <label for={name} class='checkbox__label'><slot /></label>
</div>

<style>
    .checkbox {
        position: relative;
    }
    .checkbox input {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
        clip-path: inset(50%);
    }
    .checkbox__label {
        cursor: pointer;
        display: grid;
        align-items: center;
        grid-template-columns: 40px max-content;
        gap: 15px;
    }
    .checkbox__label::before {
        content: '✓';
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        font-size: 0.5rem;
        color: var(--color-transparent);
        border: 1px solid var(--color-1);
        border-radius: 2px;
        background: var(--color-2);
        transition: color var(--transition), font-size var(--transition);
    }
    .checkbox input:checked + .checkbox__label::before {
        font-size: 1rem;
        color: var(--color-foreground);
        border-color: var(--color-0);
        background: var(--color-1);
    }
</style>
