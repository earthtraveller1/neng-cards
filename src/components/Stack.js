// This is meant to represent a page that has a single stack
//
//

import React from "react";
import Button from "./Button.js";
import Dialog from "./Dialog.js";
import { SetCurrentStackContext } from "../index.js";
import InputField from "./InputField.js";

import * as API from "../api.js"
import { Colors } from "../common.js";

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

    const [addCardDialog, setAddCardDialog] = React.useState(false)

    const [newCardFront, setNewCardFront] = React.useState("")
    const [newCardBack, setNewCardBack] = React.useState("")

    React.useEffect(() => {
        API.getStack(props.currentStack._id.toString()).then((stack) => {
            setCurrentStack(stack)
        })
    }, [addCardDialog])

    return <div className="m-4">
        <div className="flex flex-row">
            <h1 className="text-xl text-slate-400">{props.currentStack.name}</h1>

            <Button color={Colors.CYAN} onClick={
                () => {
                    setCurrentStack(null)
                }
            } className="ml-4">Go Back</Button>

            <Button color={Colors.CYAN} onClick={
                () => {
                    fetch(`/api/stacks/${props.currentStack._id}`, { method: "delete" }).then(() => {
                        setCurrentStack(null)
                    })
                }
            } className="ml-4">Delete Stack</Button>

            <Button color={Colors.CYAN} onClick={
                () => { setAddCardDialog(true) }
            } className="ml-4">Add a Card</Button>
        </div>

        <div className="flex flex-col">
            {props.currentStack.cards.map(card =>
                <p>Front: {card.frontText}, Back: {card.backText}, Id: {card._id.toString()}</p>
            )}
        </div>

        {addCardDialog && <Dialog>
            <h1>Add a Card</h1>
            <InputField name="Front:" onInput={setNewCardFront} />
            <InputField name="Back:" onInput={setNewCardBack} />

            <Button color={Colors.CYAN} onClick={() => {
                API.createCard(props.currentStack._id.toString(), {
                    frontText: newCardFront,
                    backText: newCardBack
                }).then(() => {
                    setAddCardDialog(false)
                })
            }}>Add</Button>
        </Dialog>}
    </div>
}
