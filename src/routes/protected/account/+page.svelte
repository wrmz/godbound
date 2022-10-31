<script>
    import SecureInput from '$lib/components/SecureInput.svelte';
    import SecureCheckbox from '$lib/components/SecureCheckbox.svelte';
    import Button from '$lib/components/Button.svelte';
    import { page } from '$app/stores';

    export let email = $page.data.user.email;
    export let password = '••••••••••';
    export let exposeActivity = true;

    function submit(field) {
        return async ({ detail }) => {
            const response = await fetch('/api/user/update-expose-activity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(detail)
            });

            return await response.json();
        };
    }
</script>

<section class='account'>
    <h1 class='title'>Account Settings</h1>
    <div class='account__section'>
        <h2 class='title'>Security</h2>
        <SecureInput label='Email' name='email' bind:value={email} />
        <SecureInput label='Password' name='password' bind:value={password} />
    </div>
    <div class='account__section'>
        <h2 class='title'>Privacy</h2>
        <SecureCheckbox
            name='expose_activity'
            checked={exposeActivity}
            on:submit={submit('expose_activity')}
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


    <h1>Account</h1>
    <p>Here the user can do the following:</p>
    <ul>
        <li>Change Global Email</li>
        <li>Change Global Password</li>
        <li>Change Global Privacy</li>
        <li>Delete Account</li>
    </ul>
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
