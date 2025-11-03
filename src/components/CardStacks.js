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
        <div>
            {stacks.map((stack) => {
                return <div>
                    <div>Name: {stack.name}</div>
                    <div>ID: {stack.id}</div>
                </div>
            })}
        </div>
    )
}
