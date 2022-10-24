<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import Button from '$lib/components/Button.svelte';
    import Logo from '$lib/components/Logo.svelte';

    async function handleSignOut(event) {
        console.log('signing out', event);
        const res = await fetch('auth/logout', {
            method: 'DELETE',
            body: JSON.stringify({
                email: $page.data.user.email
            })
        });
        const data = await res.json();

        $page.data.user = {
            authenticated: false,
            username: '',
            email: '',
        }

        if (res.ok) {
            await goto('/sign-in');
        }

    }

    console.log('data:', $page.data);

    export const username = $page.data.user?.username;
    export const authenticated = $page.data.user?.authenticated;

</script>

<header class="header">
    <nav class="header__nav">
        <div class="header__column">
            <a href="/protected" class="header__logo {authenticated ? 'header__logo--authenticated' : ''}">
                <span class="header__logo-svg"><Logo class="header__logo-svg" /></span>
                {#if authenticated}
                    <span class="header__logo-user">{username}</span>
                {/if}
            </a>
        </div>
        <div class="header__column">
            {#if authenticated}
                <form method="POST" action="/sign-out"><Button type="submit">Sign Out</Button></form>
                <Button href="/protected" target="_blank" priority="low">Dashboard</Button>
            {:else}
                <Button href="/sign-in" class="all-caps header__button" priority="low">Sign In</Button>
                <Button href="/sign-up" class="all-caps header__button" priority="high">Sign Up</Button>
            {/if}
        </div>
    </nav>
</header>

<style>
    .header {
        background: var(--color-blue);
        box-shadow: 0 0 20px rgba(var(--color-blue), 0.5);
    }
    .header__nav {
        display: grid;
        grid-template-columns: max-content 1fr;
        justify-content: space-between;
        gap: 20px;
        height: var(--nav-height);
        padding: 0 20px;
    }
    .header__column {
        display: grid;
        grid-auto-flow: column dense;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
    }
    .header__logo {
        position: relative;
        display: inline-grid;
        align-content: center;
        justify-items: center;
        text-decoration: none;
        font-family: var(--font-rune);
        font-size: 1rem;
        text-align: center;
        color: white;
    }
    .header__logo-svg,
    .header__logo-user {
        position: relative;
        display: block;
    }
    .header__logo-svg::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        width: calc(100% - 30px);
        height: 0;
        transform: translateX(-50%);
    }
    .header__logo--authenticated .header__logo-svg::after {
        border-bottom: 0.05em solid;
    }
    .header__logo-user {
        padding-top: 0.25rem;
    }
</style>
