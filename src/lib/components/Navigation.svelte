<script>
    import { page } from '$app/stores';
    import Button from '$lib/components/Button.svelte';
    import Logo from '$lib/components/Logo.svelte';

    export const username = $page.data.user?.username;
    export const authenticated = $page.data.user?.authenticated;
</script>

<header class="header">
    <nav class="header__nav">
        <div class="header__column">
            <a href="/" class="header__logo {authenticated ? 'header__logo--authenticated' : ''}">
                <span class="header__logo-svg"><Logo class="header__logo-svg" /></span>
                {#if authenticated}
                    <span class="header__logo-user">{username}</span>
                {/if}
            </a>
        </div>
        <div class="header__column">
            {#if authenticated}
                <form method="POST" action="/sign-out"><Button type="submit">Sign Out</Button></form>
                <Button href="/protected" target="_blank">Dashboard</Button>
            {/if}
        </div>
    </nav>
</header>
<style>
    .header {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        background: var(--color-gray);
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
        color: var(--text-color-bk-dark);
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
