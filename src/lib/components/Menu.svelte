<script>
    import { page } from '$app/stores';
    import Button from '$lib/components/Button.svelte';

    $: routeId = $page.route.id;
    console.log(routeId === '/protected/account');
</script>

<menu class='menu {$$props.class}'>
    <li class='menu__item' class:active={routeId === '/protected/campaigns'}>
        <Button href='/protected/campaigns' class='menu__button'>Campaigns</Button>
    </li>
    <li class='menu__item' class:active={routeId === '/protected/characters'}>
        <Button href='/protected/characters' class='menu__button'>Characters</Button>
    </li>
    <li class='menu__item' class:active={routeId === '/protected/profile'}>
        <Button href='/protected/profile' class='menu__button'>Profile</Button>
    </li>
    <li class='menu__item' class:active={routeId === '/protected/account'}>
        <Button href='/protected/account' class='menu__button' >Account</Button>
    </li>
</menu>

<style>
    .menu {
        display: grid;
        align-content: flex-start;
        gap:1px;
        height: 100%;
        margin: 0;
        padding: 20px 1px 0;
        list-style: none;
        background: var(--color-1);
    }
    .menu__item {
        overflow: hidden;
    }
    .menu :global(.menu__button) {
        display: grid;
        width: 100%;
        justify-content: flex-start;
        height: 35px;
        overflow: hidden;
        font-size: 0.875em;
        line-height: 33px;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;
        background: var(--color-1);
    }
    .menu :global(.menu__button:hover),
    .menu__item.active :global(.menu__button) {
        background: var(--color-0);
    }
    .menu__item.active :global(.menu__button::before) {
        content: '0';
        font-family: var(--font-symbol);
        font-size: 2.5em;
        color: var(--color-3);
    }
</style>
