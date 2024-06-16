import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { GroupBoxPreviewProps } from "../typings/GroupBoxProps";

export function preview({ sampleText }: GroupBoxPreviewProps): ReactElement {
    return <div>
        <HelloWorldSample sampleText={sampleText} />
        <br />
        <span>This is a preview of the GroupBox widget.</span>
    </div>;
}

export function getPreviewCss(): string {
    return require("./ui/GroupBox.css");
}
