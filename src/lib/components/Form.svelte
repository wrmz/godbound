<script>
    import Button from '$lib/components/Button.svelte';
    import Heading from '$lib/components/Heading.svelte';

    export let error = '';
    export let name = '';
    export let title = '';
    export let submit = 'Submit';
</script>

<form id={name} {name} method='POST' class='form'>
    {#if title}
        <header class='form__header'>
            <Heading content={title} />
        </header>
    {/if}
    <div class='form__fields'>
        {#if error}
            <p>{error}</p>
        {/if}
        <slot></slot>
    </div>
    <footer class='form__footer'>
        <Button type="submit" priority="medium">{submit}</Button>
    </footer>

    <!-- <header class='callout__header'>
        <Heading content={title} />
    </header>
    <div class='callout__content {!$$slots.image ? 'callout__content--single' : ''}'>
        {#if $$slots.image}
            <figure class='callout__content-figure'>
                <picture class='callout__content-picture'>
                    <slot name='image'></slot>
                </picture>
                <figcaption class='callout__content-figcaption'>
                    <Trim class='callout__content-figure-trim' aria-hidden='true'></Trim>
                </figcaption>
            </figure>
        {/if}
        <div class='callout__content-copy'>
            <slot name='content'><p>Placeholder</p></slot>
        </div>
    </div>
    {#if $$slots.footer}
        <footer class='callout__footer'>
            <slot name='footer'></slot>
        </footer>
    {/if} -->
</form>

<style>
    .form {
        display: grid;
        /* width: 860px; */
        width: 660px;
        max-width: calc(100% - 40px);
        gap: 60px;
        color: var(--color-foreground);
        border-radius: 4px;
        background: var(--color-panel-background);
        box-shadow: var(--shadow);
        overflow: hidden;
    }
    .form__header {
        position: relative;
        display: grid;
        align-items: center;
        justify-content: center;
        height: 175px;
        color: var(--color-foreground);
        background: var(--color-1)
    }
    .form__fields {
        display: grid;
        gap: 20px;
        padding: 0 40px;
    }

    .form__footer {
        position: relative;
        display: grid;
        grid-auto-flow: column dense;
        grid-auto-columns: minmax(25%, 1fr);
        justify-content: center;
        align-items: center;
        gap: 40px;
        padding: 0 40px 40px;
        border-radius: 0 0 2px 2px;
        background: var(--color-panel-background);
    }
</style>
