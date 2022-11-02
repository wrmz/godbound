<script>
    import Heading from '$lib/components/Heading.svelte';
    import Trim from '$lib/components/Trim.svelte';

    export let title = 'Welcome to %%GodbounD%% Scribe';
</script>

<article class="callout">
    <header class="callout__header">
        <Heading content={title} />
    </header>
    <div class="callout__content {!$$slots.image ? 'callout__content--single' : ''}">
        {#if $$slots.image}
            <figure class="callout__content-figure">
                <picture class="callout__content-picture">
                    <slot name="image"></slot>
                </picture>
                <figcaption class="callout__content-figcaption">
                    <Trim class="callout__content-figure-trim" aria-hidden="true"></Trim>
                </figcaption>
            </figure>
        {/if}
        <div class="callout__content-copy">
            <slot name="content"><p>Placeholder</p></slot>
        </div>
    </div>
    <footer class="callout__footer">
        {#if $$slots.footer}
            <slot name="footer"></slot>
        {/if}
    </footer>
</article>

<style>
    .callout {
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
    .callout__header {
        position: relative;
        display: grid;
        align-items: center;
        justify-content: center;
        height: 175px;
        color: var(--color-foreground);
        background: var(--color-1)
    }
    .callout__content {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 30px;
        padding: 0 40px;
        font-size: 18px;
        line-height: 2;
        text-align: left;
    }
    .callout__content :global(img) {
        height: 100%;
        object-fit: cover;
        object-position: top left;
    }
    .callout__content :global(p) {
        position: relative;
        margin: 0 0 1.5em;
    }
    .callout__content :global(p:last-child) {
        margin: 0;
    }
    .callout__content :global(p:first-child) {
        text-indent: 1.5em;
    }
    .callout__content :global(p:first-child::before) {
        content: '0';
        position: absolute;
        top: -0.35rem;
        left: -1.8rem;
        font-family: var(--font-symbol);
        font-size: 2.5em;
        line-height: 1;
        color: rgba(var(--color-4-rgb), 1);
    }
    .callout__content--single {
        grid-template-columns: unset;
    }
    .callout__content-figure {
        position: relative;
        width: 120px;
        height: 100px;
        margin: 0;
        border-radius: 4px;
        border: 3px solid var(--color-1);
    }
    .callout__content-figure + .callout__content-copy {
        padding: 0 0 0 30px;
        border-left: 0.5px solid var(--color-4);
    }

    .callout__footer {
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

    .callout__content-figcaption {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: calc(100% + 15px);
        left: 0;
        width: 100%;
        color: var(--color-1);
    }
</style>
