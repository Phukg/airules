import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/cli/index.ts"],
  format: ["esm"],
  target: "node18",
  shims: true,
  clean: true,
  dts: true,
  sourcemap: true,
  minify: false,
  treeshake: true,
  outDir: "dist",
});
