import { Options } from "./options";
import { Paint } from "./paint";

export type CarWithStuff = {
	name: string;
	paint?: Paint;
	options: Options[];
};
