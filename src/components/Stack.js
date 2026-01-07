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
    const [deleteCardDialog, setDeleteCardDialog] = React.useState(false)

    const [newCardFront, setNewCardFront] = React.useState("")
    const [newCardBack, setNewCardBack] = React.useState("")

    const [targetCard, setTargetCard] = React.useState(/** @type {Card} */(null))

    React.useEffect(() => {
        API.getStack(props.currentStack._id.toString()).then((stack) => {
            setCurrentStack(stack)
        })
    }, [addCardDialog, deleteCardDialog])

    return <div className="m-4">
        <div className="flex flex-row my-4">
            <h1 className="text-2xl text-slate-400">{props.currentStack.name}</h1>

            <Button color={Colors.CYAN} onClick={
                () => {
                    setCurrentStack(null)
                }
            } className="ml-4">Go Back</Button>

            <Button color={Colors.GREEN} onClick={
                () => { setAddCardDialog(true) }
            } className="ml-4">Add a Card</Button>

            <Button color={Colors.RED} onClick={
                () => {
                    fetch(`/api/stacks/${props.currentStack._id}`, { method: "delete" }).then(() => {
                        setCurrentStack(null)
                    })
                }
            } className="ml-4">Delete Stack</Button>
        </div>

        <div className="flex flex-col my-4 max-w-1/2">
            {props.currentStack.cards.map(card =>
                <div className="flex text-lg my-2 bg-blue-600 rounded-xl p-2 hover:bg-blue-700 duration-200 flex-row content-center">
                    <div className="mr-auto">
                        {card.frontText}
                    </div>
                    <div className="text-red-900 bg-red-400 p-2 rounded-lg mr-4 duration-100 hover:rounded-2xl hover:bg-red-500">
                        <img src="/images/delete.svg" width="16" onClick={() => {
                            setDeleteCardDialog(true)
                            setTargetCard(card)
                        }} />
                    </div>
                </div>
            )}
        </div>

        {addCardDialog && <Dialog>
            <h1 className="my-2">Add a Card</h1>
            <InputField className="my-2" name="Front:" onInput={setNewCardFront} />
            <InputField className="my-2" name="Back:" onInput={setNewCardBack} />

            <Button className="mt-4" color={Colors.CYAN} onClick={() => {
                API.createCard(props.currentStack._id.toString(), {
                    frontText: newCardFront,
                    backText: newCardBack
                }).then(() => {
                    setAddCardDialog(false)
                })
            }}>Add</Button>
        </Dialog>}

        {deleteCardDialog && <Dialog>
            <h1 className="p-2">Are you sure?</h1>

            <div className="flex flex-row p-2">
                <Button color={Colors.RED} className="mr-4" onClick={() => {
                    API.deleteCard(props.currentStack._id.toString(), targetCard._id.toString()).then(() => {
                        setDeleteCardDialog(false)
                    })
                }}>Yes</Button>

                <Button color={Colors.CYAN} onClick={() => {
                    setDeleteCardDialog(false)
                }}>No</Button>
            </div>
        </Dialog>}
    </div>
}
