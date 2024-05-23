import { useCallback, ReactElement, createElement, useMemo, useState, useEffect } from "react";

import { GroupBoxContainerProps } from "../typings/GroupBoxProps";

import "./ui/GroupBox.css";
import classNames from "classnames";

export function GroupBox({ data, myAttribute, selection, onSelectionChange, class: clazz, style }: GroupBoxContainerProps): ReactElement {
    const [isEmpty, setEmpty] = useState(true);
    const myData = useMemo(() => {
        if (data.status === "available") {
            if (!data.items) {
                return [];
            }
            return data.items.map((item) => ({ value: myAttribute.get(item).value, isSelected: selection?.type == 'Single' ? selection?.selection === item : selection?.selection?.includes(item) }));
        } else {
            return [];
        }
    }, [data, selection]);
    useEffect(() => setEmpty(myData.length === 0), [myData]);
    const onClick = useCallback((index: number) => {
        if (selection && selection.type == 'Single') {
            if (selection.selection === data.items?.[index]) {
                selection.setSelection(undefined);
            }
            else {
                selection?.setSelection(data.items?.[index]);
            }
        } else if (selection && selection.type == 'Multi') {
            if (selection.selection.includes(data.items![index])) {
                selection.setSelection(selection.selection.filter(item => item !== data.items![index]));
            } else {
                selection.setSelection([...selection.selection, data.items![index]]);
            }
        }
    }, [selection, data]);
    return <div className={classNames("card", clazz)} style={style}>
        <div className="mx-listview">
            <ul>
                {myData.map((e, index) => <li onClick={() => onClick(index)} className={classNames({ "selected": e.isSelected })} key={index} >{e.value}</li>)}
                {isEmpty ? <li className="mx-listview-empty">empty</li> : null}
            </ul>
        </div>
        <div className="btn" onClick={() => {
            if (onSelectionChange?.canExecute && !onSelectionChange?.isExecuting) {
                onSelectionChange.execute();
            }
        }}>Show Selection</div>
    </div>;
}
