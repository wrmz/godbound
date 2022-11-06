<script>
    import { createEventDispatcher } from 'svelte';
    import { page } from '$app/stores';
    import Modal from '$lib/components/Modal.svelte';
    import Form from '$lib/components/Form.svelte';
    import Button from '$lib/components/Button.svelte';
    import Input from '$lib/components/Input.svelte';


    const dispatch = createEventDispatcher();
    let uuid = 'secureModal' + crypto.randomUUID();
    let isDisabled = true;
    let oldValue = '';
    let password = '';

    export let modal;
    export let error = '';
    export let type = 'text';
    export let label = '';
    export let name = '';
    export let value = '';

    $: isModalOpen = false;

    const change = () => {
        isDisabled = !isDisabled;
        if (!isDisabled) {
            oldValue = value;
            value = '';
        } else {
            value = oldValue;
        }
    };

    const handleModalClose = async (e) => {
        console.log('handling', e);
        // isModalOpen = false;
        change();

    };

    /** @param {any} event */
    const handleSubmit = async (event) => {
        modal.open();
        isModalOpen = true;
    };

    const submit = async (event) => {

    };

    const handlePasswordValidation = async (ev) => {
        const formData = new FormData(ev.detail.target);
        const response = await fetch('/api/user/validate-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: $page.data.user.email,
                password: formData.get('password')
            })
        });
        const result = await response.json();

        if (response.ok) {
            submit();
        } else {
            error = result.message;
        }

        console.log(response);
    };
</script>

<form class='s-input' on:submit|preventDefault={handleSubmit}>
    {#if error}
        <p class='s-input__error'>{error}</p>
    {/if}
    <div class='s-input__container'>
        <label for={name} class='s-input__label'>{label}</label>
        <Input {type} label='{label}' id={name} name={name} placeholder='Enter a new {label}' bind:value={value} disabled='{isDisabled}' />
        <div class='s-input__actions'>
            {#if isDisabled}
                <Button on:click={change} priority='low'>Change</Button>
            {:else}
                <Button on:click={change} priority='low'>Cancel</Button>
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
            label='Password'
            name='password'
            placeholder='Your current password'
            bind:password={password}
            autofocus
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
