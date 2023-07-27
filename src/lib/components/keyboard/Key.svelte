<script lang="ts">
	import { playState } from '$lib/stores';
	export let name: string = '';
	export let active = true;
	import { onMount } from 'svelte';

	let synthesizer: any;
	onMount(async () => {
		synthesizer = await import('$lib/synthesizer');
	});

	function play(e: MouseEvent) {
		if (e.buttons === 1) {
			synthesizer.playNote(name);
		}
	}

	function stop() {
		synthesizer.stopNote(name);
	}

	const isBlackKey = (name: string) => {
		return name.includes('#');
	};

	const hasToBeShifted = (name: string) => {
		const lettersToCheck = ['D', 'E', 'G', 'A', 'B'];
		const regexString = lettersToCheck.join('|');
		const regex = new RegExp(regexString, 'i');
		return regex.test(name);
	};
</script>

<button
	class:black={isBlackKey(name)}
	class:shift={hasToBeShifted(name)}
	class:active
	class:playing={$playState.has(name)}
	on:mouseenter={play}
	on:mousedown={play}
	on:mouseup={stop}
	on:mouseleave={stop}
>
	{name}
</button>

<style>
	button {
		height: 18rem;
		width: 5rem;
		font-size: 0.7rem;
		z-index: 1;
		border-left: 1px solid #bbb;
		border-bottom: 1px solid #bbb;
		border-radius: 0 0 5px 5px;
		box-shadow: -1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,
			0 0 3px rgba(0, 0, 0, 0.2);
		background: linear-gradient(to bottom, #eee 0%, #fff 100%);
		padding: 5px;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
	button:active,
	button.playing {
		border-top: 1px solid #777;
		border-left: 1px solid #999;
		border-bottom: 1px solid #999;
		box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset,
			0 0 3px rgba(0, 0, 0, 0.2);
		background: linear-gradient(to bottom, #fff 0%, #e9e9e9 100%);
	}

	button.black {
		height: 10rem;
		width: 3rem;
		margin: 0 0 0 -1.5rem;
		z-index: 2;
		border: 1px solid #000;
		border-radius: 0 0 3px 3px;
		box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
			0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5);
		background: linear-gradient(45deg, #222 0%, #555 100%);
		color: white;
	}

	button.black:active,
	button.black.playing {
		box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
			0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5);
		background: linear-gradient(to right, #444 0%, #222 100%);
	}

	button.shift {
		margin: 0 0 0 -1.5rem;
	}
</style>
