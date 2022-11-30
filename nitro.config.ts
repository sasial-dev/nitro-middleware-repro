import { defineNitroConfig } from "nitropack";

export default defineNitroConfig({
	imports: {
		dirs: ["./utils"],
		dts: "./.nitro/types/nitro.d.ts",
	},
	typescript: {
		generateTsConfig: true,
		internalPaths: true,
	},
});
