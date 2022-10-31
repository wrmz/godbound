<script>
    import Button from '$lib/components/Button.svelte';

</script>

<menu class='menu {$$props.class}'>
    <li class='menu__item'>
        <Button href='/protected/campaigns' class='menu__button'>Campaigns</Button>
    </li>
    <li class='menu__item'>
        <Button href='/protected/characters' class='menu__button'>Characters</Button>
    </li>
    <li class='menu__item'>
        <Button href='/protected/profile' class='menu__button'>Profile</Button>
    </li>
    <li class='menu__item'>
        <Button href='/protected/account' class='menu__button'>Account</Button>
    </li>
</menu>

<style>
    .menu {
        position: sticky;
        display: grid;
        align-content: flex-start;
        gap:1px;
        top: var(--nav-height);
        height: calc(100% - var(--nav-height));
        margin: 0;
        padding: 20px 1px 0;
        list-style: none;
        background: var(--color-1);
    }
    .menu__item {
        overflow: hidden;
    }
    .menu :global(.menu__button) {
        display: block;
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
    .menu :global(.menu__button:hover) {
        width: 100%;
        justify-content: flex-start;

        background: var(--color-0);
    }
</style>
