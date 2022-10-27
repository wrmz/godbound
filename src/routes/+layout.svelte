<script>
    import Navigation from '$lib/components/Navigation.svelte';
</script>
<Navigation />
<main>
    <slot></slot>
</main>
<style>
    /**
    * @license
    * MyFonts Webfont Build ID 742439
    *
    * The fonts listed in this notice are subject to the End User License
    * Agreement(s) entered into by the website owner. All other parties are
    * explicitly restricted from using the Licensed Webfonts(s).
    *
    * You may obtain a valid license from one of MyFonts official sites.
    * http://www.fonts.com
    * http://www.myfonts.com
    * http://www.linotype.com
    *
    */
    @font-face {
        font-family: 'RunistaSymbols';
        src: url('fonts/RunistaSymbols/font.woff2') format('woff2'), url('fonts/RunistaSymbols/font.woff') format('woff');
    }
    @font-face {
        font-family: 'RunistaDecorative';
        src: url('fonts/RunistaDecorative/font.woff2') format('woff2'), url('fonts/RunistaDecorative/font.woff') format('woff');
    }
    @font-face {
        font-family: 'Primitive';
        src: url('fonts/Primitive/font.woff2') format('woff2'), url('fonts/Primitive/font.woff') format('woff');
    }

    :root {
        --nav-height: 70px;

        /** Fonts */
        --font-display: 'RunistaDecorative', 'RunistaSymbols', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        --font-symbol: 'RunistaSymbols', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        --font-rune: 'Primitive', 'RunistaDecorative', 'RunistaSymbols', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        --font-copy: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

        /** Palette */
        --color-black: #0a0908;
        --color-black-rgb: 10, 9, 8;
        --color-gray: #22333b;
        --color-gray-rgb: 34, 51, 59;
        --color-tan: #eae0d5;
        --color-tan-rgb: 234, 224, 213;
        --color-brown: #5e503f;
        --color-brown-rgb: 94, 80, 63;

        --color-dark: var(--color-black);
        --color-dark-rgb: var(--color-black-rgb);
        --color-light: var(--color-tan);
        --color-light-rgb: var(--color-tan-rgb);

        --text-color-bk-light: var(--color-dark);
        --text-color-bk-dark: var(--color-light);
        --text-color-bk-black: var(--color-light);
        --text-color-bk-gray: var(--color-light);
        --text-color-bk-tan: var(--color-dark);
        --text-color-bk-brown: var(--color-light);

        /** Transitions & Animations */
        --transition-duration: 0.18s;
        --transition-ease: ease-out;
        --transition: var(--transition-duration) var(--transition-ease);
    }
    :global(body) {
        margin: 0;
        font-family: var(--font-copy);
        font-size: 16px;
        font-weight: 300;
        line-height: 1;
        min-height: 100vh;
        color: var(--color-gray);
        background-color: white;
        font-smooth: always;
    }
    :global(body *) {
        box-sizing: border-box;
    }
    :global(.app) {
        display: grid;
        grid-template-rows: max-content 1fr max-content;
        min-height: 100vh;
    }
    :global(main) {
        position: relative;
    }

    /** Typography */
    :global(.all-caps) {
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    :global(.title) {
        font-family: var(--font-display);
        font-size: 30px;
        font-weight: normal;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    :global(em) {
        display: inline-block;
        margin: 0 0.05em;
        font-family: var(--font-display);
        font-size: 3em;
        font-style: normal;
        transform: translateY(0.4em);
    }
</style>
