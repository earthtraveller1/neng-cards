// This is meant to represent a page that has a single stack
//
//

import { CardStack } from "../common.js";
import React from "react";
import Button from "./Button.js";
import { SetCurrentStackContext } from "../index.js";

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

        <h1>{props.currentStack.name}</h1>
    </div>
}
