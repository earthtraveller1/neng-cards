// This is meant to represent a page that has a single stack
//
//

import React from "react";
import Button from "./Button.js";
import { SetCurrentStackContext } from "../index.js";

/**
 * @typedef {import("../common.js").CardStack} CardStack
 * @typedef {import("../common.js").Card} Card
 */

/**
 * @typedef {Object} StackProps
 * @property {CardStack} currentStack
 */

/**
 * @param {StackProps} props
*/
export default function Stack(props) {
    const setCurrentStack = React.useContext(SetCurrentStackContext)

    return <div className="flex flex-row">
        <Button onClick={
            () => {
                setCurrentStack(null)
            }
        }>Go Back</Button>

        <Button onClick={
            () => {
                fetch(`/api/stacks/${props.currentStack._id}`, { method: "delete" }).then(() => {
                    setCurrentStack(null)
                })
            }
        }>Delete Stack</Button>

        <Button onClick={
            () => {
                fetch(`/api/stacks/${props.currentStack._id}/cards`, {
                    method: "post" ,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(/** @type {Card} */ ({ frontText: "Hello!", backText: "Goodbye!" }))
                })
            }
        }>Add a Card</Button>

        <h1>{props.currentStack.name}</h1>
    </div>
}
