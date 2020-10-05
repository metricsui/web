<script>
	export let name;
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;700&display=swap" rel="stylesheet">
</svelte:head>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	:root {
		font-family: 'Dosis', sans-serif;
		--bg-color: #FFFFFF;
		--text-color: #000000;
		--royal-blue-dark-color: #0A2463;
		--cerise-color: #D8315B;
		--eggshell-color: #FAF3DD;
		--green-blue-crayola-color: #3E92CC;
	}

	:global(body) {
		font-family: 'Dosis', sans-serif;
		background: var(--bg-color);
		color: var(--text-color);
	}

	:global(body.dark) {
		--bg-color: #FFFFFF;
		--text-color: #000000;
	}

	h1, .display-title {
		font-size: 36px;
	}

	h2, .headline-title {
		font-size: 24px;
	}

	h3, .title {
		font-size: 20px;
	}

	.body {
		font-size: 14px;
	}
</style>