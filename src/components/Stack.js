// This is meant to represent a page that has a single stack
//
//

import { CardStack } from "../common.js";
import React from "react";

/**
 * @typedef {Object} StackProps
 * @property {CardStack} currentStack
 */

/**
 * @param {StackProps} props
*/
export default function Stack(props) {
    return <h1>{props.currentStack.name}</h1>
}
