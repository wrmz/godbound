<script>
    import Callout from '$lib/components/Callout.svelte';
    import Input from '$lib/components/Input.svelte';
    import Button from '$lib/components/Button.svelte';

    let error = '';
    let username = '';
    let email = '';
    let password = '';
</script>

<section class="auth__section">
    <Callout title="Your %%Journey%% Begins">
        <svelte:fragment slot="content">
            <div class="auth__form">
                {#if error}
                    <p>{error}</p>
                {/if}
                <form id="signup" method="POST">
                    <div class="form__fields">
                        <Input label='Username' id='username' name='username' bind:value={username} required />
                        <Input label='Email' id='email' type='email' bind:value={email} name='email' required />
                        <Input label='Password' id='password' type='password' bind:value={password} name='password' required />
                    </div>
                </form>
            </div>
        </svelte:fragment>
        <svelte:fragment slot="footer">
            <Button type='submit' priority='medium' form="signup">Sign Up</Button>
        </svelte:fragment>
    </Callout>
</section>
<style>
.auth__section {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-tan);
}
.form__fields {
    display: grid;
    gap: 20px;
}
</style>
