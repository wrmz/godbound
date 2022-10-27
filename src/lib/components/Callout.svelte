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
            <slot name="content"></slot>
        </div>
    </div>
    {#if $$slots.footer}
        <footer class="callout__footer">
            <slot name="footer"></slot>
        </footer>
    {/if}
</article>

<style>
    :global(img) {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top left;
    }
    :global(.callout__content p) {
        position: relative;
        margin: 0;
    }
    :global(.callout__content p::before) {
        content: '0';
        position: absolute;
        top: -0.35rem;
        left: -1.8rem;
        font-family: var(--font-symbol);
        font-size: 2.5em;
        line-height: 1;
        color: rgba(var(--color-gray-rgb), 0.3);
    }
    .callout {
        max-width: 1000px;
    }
    .callout__header {
        position: relative;
        display: grid;
        align-items: center;
        justify-content: center;
        height: 175px;
        color: var(--text-color-bk-brown);
        border-radius: 2px 2px 0 0;
        background: var(--color-brown);
    }

    .callout__content {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 30px;
        padding: 40px;
        font-size: 18px;
        line-height: 1.8;
        text-align: left;
        text-indent: 1.5em;
        box-shadow: -0.5px 0 0 0 var(--color-brown) inset, 0.5px 0 0 0 var(--color-brown) inset;
    }
    .callout__content--single {
        grid-template-columns: unset;
    }
    .callout__content-figure {
        position: relative;
        width: 120px;
        height: 100px;
        margin: 0;
        border-radius: 2px;
        border: 10px solid white;
        box-shadow: 0 0 0 1px var(--color-tan);
    }
    .callout__content-figure + .callout__content-copy {
        padding: 0 0 0 30px;
        border-left: 1px solid var(--color-tan);
    }

    .callout__footer {
        position: relative;
        display: grid;
        grid-auto-flow: column dense;
        grid-auto-columns: minmax(25%, 1fr);
        justify-content: center;
        align-items: center;
        gap: 30px;
        padding: 30px;
        border-radius: 0 0 2px 2px;
        background: var(--color-brown);
    }

    .callout__content-figcaption {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: calc(100% + 20px);
        left: 0;
        width: 100%;
        color: var(--color-tan);
    }
</style>
