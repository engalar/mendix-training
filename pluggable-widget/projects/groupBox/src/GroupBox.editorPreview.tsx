import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

export function preview(): ReactElement {
    return <HelloWorldSample sampleText={'sampleText'} />;
}

export function getPreviewCss(): string {
    return require("./ui/GroupBox.css");
}
