import defineReactConfig from "klarity/tsdown/react";

export default defineReactConfig({
  alias: {
    "#/": "./src/",
  },
  copy: [
    {
      from: "src/assets/*",
      to: "dist/assets",
    },
    {
      from: "src/styles.css",
      rename: "styles.css",
      to: "dist",
    },
  ],
  dts: {
    enabled: true,
    sourcemap: true,
  },
  exports: false,
  entry: {
    actions: "src/actions/index.ts",
    hooks: "src/hooks/index.ts",
    icons: "src/icons/index.ts",
    index: "src/index.ts",
  },
  fixedExtension: true,
  hash: false,
  publint: false,
  shims: false,
  target: ["es2022"],
});
