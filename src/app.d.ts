import PocketBase from "pocketbase";

declare global {
	declare namespace App {
		interface Locals {
			pb: PocketBase,
			user: any;
		}
	}
}

export { };
