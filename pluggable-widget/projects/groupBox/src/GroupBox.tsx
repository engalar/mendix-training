import { ReactElement, createElement, useMemo } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { GroupBoxContainerProps } from "../typings/GroupBoxProps";

import "./ui/GroupBox.css";

export function GroupBox({ myBlockTitle }: GroupBoxContainerProps): ReactElement {
    const sampleText = useMemo(() => {
        if (myBlockTitle.status === "available") {
            return myBlockTitle.value;
        } else {
            return "Loading...";
        }
    }, [myBlockTitle]);
    return <HelloWorldSample sampleText={sampleText} />;
}
