import { ReactElement, createElement } from "react";

export interface HelloWorldSampleProps {
    sampleText?: string;
    slogan: string;
}

export function HelloWorldSample({ sampleText, slogan }: HelloWorldSampleProps): ReactElement {
    return <div className="widget-hello-world">Hello {sampleText}, Slogan: {slogan}</div>;
}
