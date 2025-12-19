import React from "react"
import Dialog from "./Dialog.js"
import InputField from "./InputField.js"
import Button from "./Button.js"
import { SetCurrentStackContext } from "../index.js"

/**
 * @typedef {import("../common.js").Card} Card
 * @typedef {import("../common.js").CardStack} CardStack
 */

export default function CardStacks() {
    const [stacks, setStacks] = React.useState(/** @type {CardStack[]} */([]))
    const [newStackDialog, setNewStackDialog] = React.useState(false)
    const [newStackName, setNewStackName] = React.useState("")

    React.useEffect(() => {
        (async () => {
            const response = await fetch("/api/stacks")
            // Maybe do some data validation later to ensure that this is the 
            // right type
            const json = /** @type { CardStack[] } */ (await response.json())
            return json
        })().then(stacks => {
            setStacks(stacks)
        })
    }, [newStackDialog])

    const setCurrentStack = React.useContext(SetCurrentStackContext)

    return (
        <>
            <div className="flex flex-row items-start pt-4 items-center">
                <h1 className="text-xl text-slate-400 font-bold px-4">Your Stacks</h1>
                <Button onClick={() => {
                    setNewStackDialog(true)
                }}>New Stack</Button>
            </div>
            <div className="flex flex-row flex-wrap">
                {stacks.map((stack) => {
                    return <button className={
                        "m-4 flex min-h-64 w-sm flex-col-reverse p-4 bg-slate-800 " +
                        "border-solid border-4 rounded-xl select-none " +
                        "hover:bg-slate-300 hover:text-slate-800 hover:border-8 duration-300"
                    } onClick={() => {
                        setCurrentStack(stack)
                    }}>
                        <div className="text-center font-bold">{stack.name}</div>
                    </button>
                })}
            </div>

            {newStackDialog && <Dialog>
                <h1 className="text-lg">Create a new Stack</h1>
                <InputField className="my-8" name="Name" onInput={setNewStackName} />
                <Button className="mt-4" onClick={() => {
                    fetch("/api/stacks", {
                        method: "POST",
                        body: JSON.stringify(/** @type {CardStack} */ ({ name: newStackName, cards: []})),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(() => {
                        setNewStackDialog(false)
                    })
                }}>Okay</Button>
            </Dialog>}
        </>
    )
}
