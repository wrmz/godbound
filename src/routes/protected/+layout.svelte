<script>
    import Menu from '$lib/components/Menu.svelte';
    import { page } from '$app/stores';

    let user = $page.data.user;
</script>

<div class='workspace'>
    <div class='workspace__menu'><Menu /></div>
    <div class='workspace__editor'>
        <div class='editor'>
            <div class='editor__container'>
                <slot {user} />
            </div>
        </div>
    </div>
</div>

<style>
    .workspace {
        position: relative;
        display: grid;
        height: 100%;
        grid-template-columns: 140px 1fr;
    }
    .workspace__menu {
        position: sticky;
        top: var(--nav-height);
        height: calc(100vh - var(--nav-height));
    }
    .workspace__editor {
        position: relative;
    }
    .editor {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 50px;
    }
</style>
