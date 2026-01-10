import React from "react"

import Button from "./Button.js"
import { Colors } from "../common";

/**
 * @typedef {import("../common.js").CardStack} CardStack
 * @typedef {import("../common.js").Card} Card
 */

/** 
    * @typedef {Object} StudyingProps
    * @property {CardStack} currentStack
    */

/**
    * @param {StudyingProps} props
    */
export default function Studying(props) {
    const [currentCardIndex, setCurrentCardIndex] = React.useState(0)
    const [currentCard, setCurrentCard] = React.useState(props.currentStack.cards[0])
    const [seeingBack, setSeeingBack] = React.useState(false);

    React.useEffect(() => {
        setCurrentCard(props.currentStack.cards[currentCardIndex])
    }, [currentCardIndex])

    return <div>
        <div>{
            seeingBack ?
                <div>{currentCard.frontText}</div> :
                <div>{currentCard.backText}</div>
        }</div>

        <div className="flex flex-row">
            <Button color={Colors.CYAN} onClick={() => {
                let newIndex = currentCardIndex - 1
                if (newIndex < 0) {
                    newIndex = props.currentStack.cards.length - 1
                }
            }}>Previous</Button>
            <Button color={Colors.CYAN} onClick={() => {
                setSeeingBack(!seeingBack)
            }}>{seeingBack ? "See Front" : "See Back"}</Button>
            <Button color={Colors.CYAN} onClick={() => {
                let newIndex = (currentCardIndex + 1) % props.currentStack.cards.length
                setCurrentCardIndex(newIndex)
            }}>Next</Button>
        </div>
    </div>
}
