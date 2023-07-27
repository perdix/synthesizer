import { writable } from 'svelte/store';

export const playState = writable(new Map<string, any>());
