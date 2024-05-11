import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { GroupBoxPreviewProps } from "../typings/GroupBoxProps";

export function preview({ sampleText }: GroupBoxPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/GroupBox.css");
}
