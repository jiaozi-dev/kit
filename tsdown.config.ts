import { defineConfig } from "tsdown";

export default defineConfig({
    entry: "./src/index.ts",
    outDir: "./dist",
    target: "esnext",
    format: ["esm", "cjs"],
    platform: "neutral",
    minify: true,
    sourcemap: true,
    dts: true,
    clean: true,
});
