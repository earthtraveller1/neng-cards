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
                return <div className="m-4 flex min-h-48 w-sm flex-col p-4 bg-slate-800 border-solid border-4 rounded-xl">
                    <div className="text-center font-bold">{stack.name}</div>
                </div>
            })}
        </div>
    )
}
