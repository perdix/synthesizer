<script lang="ts">
	import Volume from '$lib/components/Volume.svelte';
	import Keyboard from '$lib/components/keyboard/Keyboard.svelte';
	import { onMount } from 'svelte';
</script>

<div class="wrapper">
	<header>
		<h1>Basic Synthesizer</h1>

		<div class="controls">
			<Volume />
		</div>
	</header>

	<main>
		<div>Oscillators Filters Effects Melodies</div>

		<div>Visualisation</div>
	</main>

	<div>
		<Keyboard />
	</div>
</div>

<style>
	.wrapper {
		width: 100vw;
		height: 100vh;
		max-width: 1600px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
		background-color: rgb(35, 46, 151);
	}
	header {
		padding: 15px;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
</style>
