<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { afterNavigate } from '$app/navigation';

    let pathname = $page.url.pathname;

    $: pathnames = pathname.substring(1).split('/');
    $: breadcrumbs = pathnames.map(function (name) {
        if (name === 'protected') {
            name = 'Dashboard';
        }
        return name.replace(name[0], name[0].toUpperCase());
    });


    const __pathname = $page.url.pathname;
    onMount(async () => {
        console.log('mounted');
    });

    afterNavigate((navigation) => {
        pathname = navigation.to.url.pathname;
    });




    /** @param {Number} index */
    function constructHref(index) {
        const path = pathnames.slice(0, index + 1).join('/');
        return '/' + path;
    }

</script>

<nav>
    <ul>
        {#each breadcrumbs as breadcrumb, index}
            <li>
                <a href={constructHref(index)}>{breadcrumb}</a>
            </li>
        {/each}
    </ul>
</nav>

<style>
    ul {
        display: grid;
        grid-auto-flow: column dense;
        grid-auto-columns: max-content;
        gap: 0.5em;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li:not(:first-child)::before {
        content: '/';
        margin-right: 0.5em;
        color: var(--color-3);
    }
    a {
        font-family: var(--font-display);
        font-size: 1.125rem;
        text-transform: uppercase;
        text-decoration: none;
        color: var(--color-6);
        transition: color var(--transition);
    }
    a:hover {
        color: var(--color-7);
    }
</style>
