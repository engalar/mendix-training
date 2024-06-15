import { defineConfig } from "vite";
import vitePluginMendix from "D:/Users/eg/Documents/GitHub/vite-plugin-monorepo/packages/vite-plugin-mendix/src/index.ts";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vitePluginMendix({
            widgetName: pkg.widgetName,
            widgetPackage: pkg.packagePath,
            testProject: pkg.config.projectPath
        })
    ]
});
