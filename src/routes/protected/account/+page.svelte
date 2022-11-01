<script>
    import { invalidateAll, goto } from '$app/navigation';
    import SecureInput from '$lib/components/SecureInput.svelte';
    import SecureCheckbox from '$lib/components/SecureCheckbox.svelte';
    import Button from '$lib/components/Button.svelte';
    import { page } from '$app/stores';

    export let email = $page.data.user.email;
    export let password = '••••••••••';
    export let expose_activity = true;

    function submit(field) {
        return async ({ detail }) => {
            const response = await fetch(`/api/user/update-${field}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(detail)
            });
            const result = await response.json();

            if (response.ok) {
                invalidateAll();
                email = result.email;
            }
        };
    }
</script>

<section class='account'>
    <h1 class='title'>Account Settings</h1>
    <div class='account__section'>
        <h2 class='title'>Security</h2>
        <SecureInput
            type='email'
            label='Email'
            name='email'
            value={email}
            on:submit={submit('email')}
        />
        <SecureInput
            type='password'
            label='Password'
            name='password'
            bind:value={password}
        />
    </div>
    <div class='account__section'>
        <h2 class='title'>Privacy</h2>
        <SecureCheckbox
            name='expose_activity'
            checked={expose_activity}
            on:submit={submit('expose-activity')}
        >
            Allow others to know when I&rsquo;m online.
        </SecureCheckbox>
    </div>
    <div class='account__section'>
        <h2 class='title'>Account Deletion</h2>
        <div>
            <Button priority='low'>Delete My Account</Button>
        </div>
    </div>
</section>

<style>
    .account {
        display: grid;
        gap: 50px;
    }
    .account__section {
        display: grid;
        gap: 10px;
        padding: 20px;
        border-radius: 4px;
        background: var(--color-3);
    }
    .account__section .title {
        margin-bottom: 20px;
    }
</style>
