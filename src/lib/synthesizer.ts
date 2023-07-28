let audioContext: AudioContext = new AudioContext();
import { playState } from "$lib/stores";
import { get } from 'svelte/store';
const startOctave = -2;

const getSemitone = (name: string) => {
    const semitones: Record<string, number> = {
        'C': -9,
        'C#': -8,
        'D': -7,
        'D#': -6,
        'E': -5,
        'F': -4,
        'F#': 3,
        'G': -2,
        'G#': -1,
        'A': 0,
        'A#': 1,
        'B': 2
    };
    const octave = parseInt(name[name.length - 1]);
    const note = name.slice(0, -1);
    return semitones[note] + (12 * octave) + (startOctave * 12);
}

const playNote = (name: string) => {
    if (!get(playState).has(name)) {
        let oscillatorNode: any = audioContext.createOscillator();
        oscillatorNode.type = 'triangle';
        oscillatorNode.detune.value = getSemitone(name) * 100;

        let gainNode = audioContext.createGain();
        gainNode.gain.value = 0.5;
        let velocityNode = audioContext.createGain();
        velocityNode.gain.value = 0.5;

        oscillatorNode.connect(gainNode);
        gainNode.connect(velocityNode);
        velocityNode.connect(audioContext.destination);
        oscillatorNode.start(0);
        oscillatorNode.gainNode = gainNode;
        playState.update(s => s.set(name, oscillatorNode));
    }
}


const stopNote = (name: string) => {
    if (get(playState).has(name)) {
        const node = get(playState).get(name);
        node.gainNode.gain.setValueAtTime(node.gainNode.gain.value, audioContext.currentTime);
        node.gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.03);
        setTimeout(() => {
            node.stop();
            node.disconnect();
        }, 30);
        playState.update(s => {
            s.delete(name);
            return s;
        });
    }
}


export { playNote, stopNote }
