<script>
	import Button from '$lib/components/Button.svelte';
</script>

<section class="characters">
	<h1 class="title">Characters</h1>
	<div class="characters__section">
		<Button href="/protected/characters/create">Create a Character</Button>
	</div>
	<!-- <SecureInput
            type='email'
            label='Email'
            name='email'
            value={email}
            error={errors.email}
            on:submit={submit('email')}
        />
        <SecureInput
            type='password'
            label='Password'
            name='password'
            value={password}
            error={errors.password}
            on:submit={submit('password')}
        /> -->
</section>

<!--
<section class='characters'>
    <h1>Characters</h1>
    <p>Here the user can do the following:</p>
    <ul>
        <li>
            Manage All Characters Including:
            <ul>
                <li>View character stats</li>
                <li>Creating new characters</li>
                <li>Modifying existing characters</li>
                <li>Character retirement &amp; deletion</li>
                <li>Campaign assignment</li>
                <li>Role assignment</li>
            </ul>
        </li>
        <li>
            DM roles can also:
            <ul>
                <li>Lock/Unlock character stats for campaigns they preside over</li>
                <li>Can modify character stats for campaigns they preside over</li>
            </ul>
        </li>
    </ul>
</section> -->
<style>
	.characters {
		display: grid;
		gap: 50px;
	}
	.characters__section {
		display: grid;
		gap: 10px;
		padding: 20px;
		border-radius: 4px;
		background: var(--color-3);
	}
	.characters__section .title {
		margin-bottom: 20px;
	}
</style>
