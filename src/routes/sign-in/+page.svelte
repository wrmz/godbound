<script>
    import Input from '$lib/components/Input.svelte';
    import Button from '$lib/components/Button.svelte';

    let error = '';
    let email = '';
    let password = '';
</script>

<section class="auth__section">
    <article class="auth__article">
        <h1 class="title auth__title">Your Journey Continues&hellip;</h1>
        <div class="auth__form">
            {#if error}
                <p>{error}</p>
            {/if}
            <form method="POST">
                <div class="form__info">
                    <p>Get your <em>butt</em> back in here.</p>
                </div>
                <div class="form__fields">
                    <Input label='Enter Your Email' id='email' type='email' bind:value={email} name='email' required />
                    <Input label='Enter Your Password' id='password' type='password' bind:value={password} name='password' required />
                </div>
                <div class="form__actions">
                    <Button type='submit' priority="em">Sign In</Button>
                </div>
            </form>
        </div>
    </article>
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
.auth__article {
    overflow: hidden;
    border-radius: 3px;
    background: white;
    box-shadow: 0 0 20px rgba(var(--color-yellow-rgb), 0.3);
}
.auth__title {
    margin: 0;
    padding: 20px 30px;
    text-align: center;
    background-color: var(--color-yellow);
}
.auth__form {
    padding: 30px;
}
.form__actions,
.form__fields {
    display: grid;
    gap: 20px;
}
.form__actions {
    margin-top: 50px;
}
.form__info {
    text-align: center;
}
.form__info p {
    margin: 0 0 50px;
    font-size: 1.25rem;
    color: var(--color-blue);
    opacity: 0.75;
}
</style>
