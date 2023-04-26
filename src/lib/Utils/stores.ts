import { writable, type Writable } from 'svelte/store';
export const Selectedpage: Writable<number> = writable(0);