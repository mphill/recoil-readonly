import { atom } from "recoil";
import { CarWithStuff } from "../types/car-with-stuff";

export const state = atom<CarWithStuff[]>({
	key: "car-stuff",
	default: [],
});
