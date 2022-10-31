<script>
    import Button from '$lib/components/Button.svelte';
    import Input from '$lib/components/Input.svelte';

    export let error = '';
    export let label = '';
    export let name = '';
    export let value = '';
    let isDisabled = true;
    let oldValue = '';

    const change = () => {
        isDisabled = !isDisabled;
        if (!isDisabled) {
            oldValue = value;
            value = '';
        } else {
            value = oldValue;
        }
    };
</script>

<form method='POST' action='?/{name}' class='s-input'>
    {#if error}
        <p>{error}</p>
    {/if}
    <label for={name} class='s-input__label'>{label}</label>
    <Input label='{label}' id={name} name={name} placeholder='Enter a new {label}' bind:value={value} disabled='{isDisabled}' />
    <div class='s-input__actions'>
        {#if isDisabled}
            <Button on:click={change} priority='low'>Change</Button>
        {:else}
            <Button on:click={change} priority='low'>Cancel</Button>
            <Button type='submit' priority='high'>Save</Button>
        {/if}
    </div>
</form>

<style>
    .s-input {
        display: grid;
        grid-template-columns: minmax(max-content, 130px) 1fr max-content;
        padding: 0;
    }
    .s-input__label {
        display: flex;
        align-items: center;
        padding: 0 20px;
        border-radius: 2px 0 0 2px;
        background: var(--color-1);
    }
    .s-input__actions {
        display: grid;
        grid-auto-flow: column dense;
        grid-auto-columns: max-content;
        align-items: center;
        gap: 1px;
        padding: 1px 1px 1px 0;
        overflow: hidden;
        border-radius: 0 2px 2px 0;
        background: var(--color-1);
    }
    .s-input :global(.field__input) {
        border-radius: 0;
    }
    .s-input :global(.button) {
        height: 52px;
        border-radius: 0;
    }
    .s-input :global(.button:last-child) {
        border-radius: 0 2px 2px 0;
    }
</style>
