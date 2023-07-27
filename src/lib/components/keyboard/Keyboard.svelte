<script lang="ts">
	import Key from '$lib/components/keyboard/Key.svelte';
	import { onMount } from 'svelte';
	let synthesizer: any;

	const octaves = ['1', '2', '3'];
	const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

	onMount(async () => {
		synthesizer = await import('../../synthesizer');
	});

	const play = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'a':
				synthesizer.playNote('C1');
				break;
			case 's':
				synthesizer.playNote('D1');
				break;
			case 'd':
				synthesizer.playNote('E1');
				break;
			case 'f':
				synthesizer.playNote('F1');
				break;
			case 'j':
				synthesizer.playNote('G1');
				break;
			case 'k':
				synthesizer.playNote('A1');
				break;
			case 'l':
				synthesizer.playNote('B1');
				break;
			case 'ö':
				synthesizer.playNote('C2');
				break;
			default:
				break;
		}
	};

	const stop = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'a':
				synthesizer.stopNote('C1');
				break;
			case 's':
				synthesizer.stopNote('D1');
				break;
			case 'd':
				synthesizer.stopNote('E1');
				break;
			case 'f':
				synthesizer.stopNote('F1');
				break;
			case 'j':
				synthesizer.stopNote('G1');
				break;
			case 'k':
				synthesizer.stopNote('A1');
				break;
			case 'l':
				synthesizer.stopNote('B1');
				break;
			case 'ö':
				synthesizer.stopNote('C2');
				break;
			default:
				break;
		}
	};
</script>

<div class="keyboard">
	{#each octaves as octave}
		{#each keys as key}
			<Key name={key + octave} />
		{/each}
	{/each}
</div>

<svelte:window on:keydown|preventDefault={play} on:keyup|preventDefault={stop} />

<style>
	.keyboard {
		width: 100%;
		margin-bottom: 10px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		overflow-x: scroll;
	}
</style>
