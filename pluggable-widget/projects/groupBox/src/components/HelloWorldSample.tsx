import { ReactElement, createElement, useMemo } from "react";

export interface HelloWorldSampleProps {
    sampleText?: string;
}

export function HelloWorldSample({ sampleText }: HelloWorldSampleProps): ReactElement {
    const welcome = useMemo(() => {
        // @ts-ignore
        const locale = mx.session.getConfig('locale.code') || 'en_CN';
        return locale === 'zh_CN' ? '欢迎' : locale === 'zh_TW' ? '歡迎' : 'Welcome';
    }, []);
    return <div className="widget-hello-world">{welcome} {sampleText}</div>;
}
