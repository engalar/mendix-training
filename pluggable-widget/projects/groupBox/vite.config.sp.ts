import { defineConfig } from "vite";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            // input: [`src/${pkg.widgetName}.editorConfig.ts`, `src/${pkg.widgetName}.editorPreview.tsx`],
            output: {
                format: "cjs",
                entryFileNames: "[name].js",
                // exports: 'named',
                esModule: true
            },
            plugins: [
                //@ts-ignore
                resolve({}),
                //@ts-ignore
                commonjs({})
            ]
        },
        lib: {
            entry: [`src/${pkg.widgetName}.editorConfig.ts`, `src/${pkg.widgetName}.editorPreview.tsx`],
            formats: ["cjs"]
        }
    }
});
