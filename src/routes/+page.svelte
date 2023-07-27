<script lang="ts">
	import Keyboard from '$lib/components/keyboard/Keyboard.svelte';
	import { onMount } from 'svelte';
</script>

<div class="wrapper">
	<header>
		<h1>Basic Synthesizer</h1>

		<div class="controls">Volume Killswitch</div>
	</header>

	<div>Oscillators Filters Effects Melodies</div>

	<div>Visualisation</div>

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
	}
</style>
