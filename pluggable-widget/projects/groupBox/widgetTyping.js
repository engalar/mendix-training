import { promises as fs } from "fs";
import { extname, join } from "path";
import {
    listDir,
    sourcePath,
    widgetEntry,
    editorConfigEntry,
    isTypescript,
    projectPath
} from "@mendix/pluggable-widgets-tools/configs/shared";

const { transformPackage } = require("@mendix/pluggable-widgets-tools/dist/typings-generator");

const sourceDir = join(sourcePath, "src");

async function main() {
    await transformPackage(await fs.readFile(join(sourceDir, "package.xml"), { encoding: "utf8" }), sourceDir);
}

main();
