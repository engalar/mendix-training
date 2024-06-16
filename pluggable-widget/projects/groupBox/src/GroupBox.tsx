import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { GroupBoxContainerProps } from "../typings/GroupBoxProps";

import "./ui/GroupBox.css";

export function GroupBox({ sampleText, slogan }: GroupBoxContainerProps): ReactElement {
    return <div>
        <HelloWorldSample sampleText={sampleText ? sampleText : "World"} />
        <span>version 1.3</span>
        <br />
        <span>Your slogan is: {slogan ? slogan : "No slogan"}</span>
    </div>;
}
