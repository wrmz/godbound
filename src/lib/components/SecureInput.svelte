<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { page } from '$app/stores';
    import Modal from '$lib/components/Modal.svelte';
    import Form from '$lib/components/Form.svelte';
    import Button from '$lib/components/Button.svelte';
    import Input from '$lib/components/Input.svelte';

    const dispatch = createEventDispatcher();
    let _originalValue = '';
    let inputRef = null;
    let uuid = 'secureModal' + crypto.randomUUID();
    let isDisabled = true;
    let verifyPassword = '';

    /** @type {any} */
    export let modal;
    export let type = 'text';
    export let label = '';
    export let name = '';
    export let value = '';
    export let error = '';

    const handleOnMount = () => {
        _originalValue = value;
    };

    const toggleEditable = () => {
        isDisabled = !isDisabled;
        verifyPassword = '';
        if (!isDisabled) {
            value = '';
            inputRef.focus();
        } else {
            value = _originalValue;
        }
    };

    const handleModalClose = () => {
        toggleEditable();
    };

    const handleSubmit = () => {
        verifyPassword = '';
        modal.open();
    };

    const handleBlur = () => {
        toggleEditable();
    };

    const submit = () => {
        dispatch('submit', { [name]: value });
    };

    const handlePasswordValidation = async (event) => {
        const formData = new FormData(event.detail.target);
        const response = await fetch('/api/user/validate-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: $page.data.user.email,
                password: formData.get('verifyPassword')
            })
        });
        const result = await response.json();

        if (response.ok) {
            error = '';
            submit();
        } else {
            error = result.message;
        }

        toggleEditable();
    };

    onMount(handleOnMount);
</script>

<form class='s-input' on:submit|preventDefault={handleSubmit}>
    {#if error}
        <p class='s-input__error'>{error}</p>
    {/if}
    <div class='s-input__container'>
        <label for={name} class='s-input__label'>{label}</label>
        <Input
            {type}
            label='{label}'
            id={name}
            name={name}
            placeholder='Enter a new {label}'
            bind:this={inputRef}
            bind:value={value}
            on:blur={handleBlur}
            disabled='{isDisabled}'
        />
        <div class='s-input__actions'>
            {#if isDisabled}
                <Button on:click={toggleEditable} priority='low'>Change</Button>
            {:else}
                <Button on:click={toggleEditable} priority='low'>Cancel</Button>
                <Button type='submit' priority='high'>Save</Button>
            {/if}
        </div>
    </div>
</form>
<Modal bind:this={modal} on:close={handleModalClose}>
    <Form
        name={uuid}
        method='dialog'
        title='Are you %%ReallY%% even {$page.data.user.username}'
        submit='Tis truly, Knave'
        priority='low'
        on:submit={handlePasswordValidation}
    >
        <Input
            type='password'
            label='Current Password'
            name='verifyPassword'
            placeholder='Your current password'
            bind:value={verifyPassword}
            autofocus
            autocomplete='off'
        />
    </Form>
</Modal>

<style>
    .s-input {
        display: grid;
        gap: 10px;
    }
    .s-input__container {
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
    .s-input__error {
        margin: 0;
        color: var(--color-red);
    }
</style>
