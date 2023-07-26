<script lang="ts">
	import { getContext, onMount } from 'svelte';
	export let name: string = '';
	let audioContext: AudioContext = getContext('audioContext');
	let oscillator: OscillatorNode;

	const getSemitone = (name: string) => {
		switch (name) {
			case 'C':
				return -9;
			case '#C':
				return -8;
			case 'D':
				return -7;
			case '#D':
				return -6;
			case 'E':
				return -5;
			case 'F':
				return -4;
			case '#F':
				return -3;
			case 'G':
				return -2;
			case '#G':
				return -1;
			case 'A':
				return 0;
			case '#A':
				return 1;
			case 'B':
				return 2;
			default:
				return 0;
		}
	};

	function play() {
		oscillator = audioContext.createOscillator();
		oscillator.type = 'sine';
		oscillator.detune.value = getSemitone(name) * 100;
		oscillator.connect(audioContext.destination);
		oscillator.start(0);
	}

	function stop() {
		oscillator.stop();
	}

	onMount(() => {});
</script>

<button on:mousedown={play} on:mouseenter={play} on:mouseup={stop} on:mouseleave={stop}>
	{name}
</button>

<style>
	button {
		padding: 60px;
	}
</style>
