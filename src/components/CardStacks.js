import React from "react"
import { CardStack } from "../common.js"

export default function CardStacks() {
    const [stacks, setStacks] = React.useState(/** @type {CardStack[]} */([]))

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
    }, [])

    return (
        <div className="flex flex-row flex-wrap">
            {stacks.map((stack) => {
                return <button className={ 
                    "m-4 flex min-h-64 w-sm flex-col-reverse p-4 bg-slate-800 " + 
                        "border-solid border-4 rounded-xl select-none " +
                        "hover:bg-slate-300 hover:text-slate-800 hover:border-8 duration-300"
                }>
                    <div className="text-center font-bold">{stack.name}</div>
                </button>
            })}
        </div>
    )
}
