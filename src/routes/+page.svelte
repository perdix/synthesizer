<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import Keyboard from '$lib/components/keyboard/Keyboard.svelte';
	import { browser } from '$app/environment';

	if (browser) {
		setContext('audioContext', new AudioContext());
	}
</script>

<h1>Basic Synthesizer</h1>

<Keyboard />

<style>
</style>
