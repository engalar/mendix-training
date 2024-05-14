import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { GroupBoxContainerProps } from "../typings/GroupBoxProps";

import "./ui/GroupBox.css";

export function GroupBox({ sampleText, slogan }: GroupBoxContainerProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText ? sampleText : "World"} slogan={slogan} />;
}
