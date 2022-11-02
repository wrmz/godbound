<script>
    import Form from '$lib/components/Form.svelte';
    import Input from '$lib/components/Input.svelte';

    let username = '';
    let email = '';
    let password = '';
</script>

<section class='auth__section'>
    <Form
        name='signup'
        title='Your %%JourneY%% Begins'
        submit='Sign Up'
        autocomplete='off'
    >
        <Input label='Username' id='username' name='username' bind:value={username} required />
        <Input label='Email' id='email' type='email' bind:value={email} name='email' required />
        <Input label='Password' id='password' type='password' bind:value={password} name='password' required />
    </Form>
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
}
</style>
