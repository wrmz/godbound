<script>
    import Button from '$lib/components/Button.svelte';
    import Callout from '$lib/components/Callout.svelte';
    import photo from '$lib/assets/beard_2.png'
    import { page } from '$app/stores';
</script>

<section class="home">
    <Callout>
        <svelte:fragment slot="image">
            <img alt="" src={photo} />
        </svelte:fragment>
        <svelte:fragment slot="content">
            <p>Godbound Scribe is a dashboard of sorts, specifically designed to aid your tabletop RPG game. Ok, more specifically Godbound&hellip;</p>
            <p>Alright, let&rsquo;s be honest. I made this for me. It&rsquo;s mine and you cannot&nbsp;have&nbsp;it.</p>
        </svelte:fragment>
        <svelte:fragment slot="footer">
            <Button href="/sign-in" priority="medium">Sign In</Button>
            <Button href="/sign-up" priority="medium">Sign Up</Button>
        </svelte:fragment>
    </Callout>
</section>

<style>
    .home {
        display: grid;
        align-items: center;
        justify-items: center;
        min-height: calc(100vh - var(--nav-height));
        padding: 0 100px;
        text-align: center;
    }
</style>
