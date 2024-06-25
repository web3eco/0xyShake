import {Bug, OxygenBubble} from "./styled";
import {useState} from "react";

export type FlyingItemProps = { key: string, isBug: boolean, onClick: () => void };

export function FlyingItem(props: FlyingItemProps) {
    const {isBug, onClick} = props;
    const howFar = 300
    const [x, setX] = useState<number>(Math.random() * howFar * randomInverse())
    const [y, setY] = useState<number>(Math.random() * howFar * randomInverse())
    const item = isBug
        ? <Bug onClick={onClick}>Bug</Bug>
        : <OxygenBubble onClick={onClick}>O2</OxygenBubble>
    return (
        <div
            style={{
            top: x,
            left: y,
            position: "absolute"
        }}>
            {item}
        </div>
    )
}
function randomInverse() {
    return Math.random() > 0.5 ? 1 : -1
}