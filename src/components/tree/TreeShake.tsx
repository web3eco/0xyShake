import {OxygenBubble, ShakableTree} from "./styled";
import {useEffect, useState} from "react";
import {FlyingItem, FlyingItemProps} from "./FlyingItem";
import {Relative} from "../styled/styled";

export function TreeShake({}) {
    const threshold = 500
    const [totalPoints, setTotalPoints] = useState(0)
    const [isPressed, setIsPressed] = useState<boolean>(false)
    const [previousCoordinates, setPreviousCoordinates] = useState<{ x: number, y: number }>()
    const [moveDistance, setMoveDistance] = useState<number>(0)
    const [flyingItemsProps, setFlyingItemsProps] = useState<FlyingItemProps[]>([])
    const [toBeDeleted, setToBeDeleted] = useState<string>()
    const [increasePoints, setIncreasePoints] = useState<boolean>(false)
    const [resetPoints, setResetPoints] = useState<boolean>(false)

    useEffect(() => {
        if (moveDistance > threshold) {
            const isBug = rollBug();
            const itemIndex = flyingItemsProps.length
            const key = Math.random() + "";
            const newItem: FlyingItemProps = {
                key,
                isBug,
                onClick: () => {
                    isBug ? setResetPoints(true) : setIncreasePoints(true)
                    setToBeDeleted(key)
                }
            }
            setFlyingItemsProps([
                ...flyingItemsProps, newItem
            ])
            setMoveDistance(0)
        }
    }, [moveDistance, flyingItemsProps])

    useEffect(() => {
        if (!toBeDeleted) return;
        const index = flyingItemsProps.findIndex(value => value.key === toBeDeleted)
        if (index === -1) return;
        const newArray = [...flyingItemsProps]
        newArray.splice(index, 1)
        setFlyingItemsProps([...newArray])
        setToBeDeleted(undefined)
    }, [toBeDeleted]);
    useEffect(() => {
        if (increasePoints) {
            setTotalPoints(totalPoints + 1)
            setIncreasePoints(false)
        }
    }, [increasePoints]);
    useEffect(() => {
        if (resetPoints) {
            setTotalPoints(0)
            setResetPoints(false)
        }
    }, [resetPoints]);

    const onMouseDown = () => {
        setIsPressed(true)
    }
    const onMouseUp = () => {
        setIsPressed(false)
    }

    const onMouseMove = (e) => {
        if (isPressed) {
            let x, y: number;
            if (e.changedTouches) {
                x = Math.round(e.changedTouches[0].clientX)
                y = Math.round(e.changedTouches[0].clientY)
            } else {
                x = e.clientX
                y = e.clientY
            }
            if (previousCoordinates) {
                setMoveDistance(
                    + moveDistance
                    + getDiff(previousCoordinates.x, x)
                    + getDiff(previousCoordinates.y, y)
                )
            }
            setPreviousCoordinates({
                x: x,
                y: y
            })
        }
    }

    return (
        <div className={"flex flex-col items-center"}>
            <div className={"basis-[auto]"}>
                Collected oxygen: {totalPoints}
            </div>
            <Relative>
            {
                flyingItemsProps.map(props => <FlyingItem {...props} />)
            }
            </Relative>
            <ShakableTree
                className={"text-center flex items-center justify-center select-none touch-none"}
                onTouchStart={onMouseDown}
                onTouchEnd={onMouseUp}
                onTouchMove={onMouseMove}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}>
                This is a green tree (shake me)
            </ShakableTree>
        </div>
    )
}

function getDiff(a: number, b: number) {
    return Math.max(a, b) - Math.min(b);
}

function rollBug() {
    return (Math.random()) > 0.8
}