<script>
    import Input from '$lib/components/Input.svelte';
    import { page } from '$app/stores';

    export let username = $page.data.user.username;
</script>
<section class='profile'>
    <h1>Profile</h1>
    <Input label='Username' id='username' name='username' disabled bind:value={username} />

    <p>Here the user can do the following:</p>
    <ul>
        <li>Change Global Avatar</li>
        <li>Change Global Dice Preference</li>
        <li>Change Global Username</li>
        <li>Change Global Description</li>
    </ul>
</section>
