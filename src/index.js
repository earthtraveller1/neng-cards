import * as ReactDOM from "react-dom/client"
import * as React from "react"
import Header from "./components/Header.js"
import CardStacks from "./components/CardStacks.js"
import Stack from "./components/Stack.js"

/**
 * @typedef {import("./common.js").Card} Card
 * @typedef {import("./common.js").CardStack} CardStack
 */

export const SetCurrentStackContext = React.createContext(/** @type {(arg0: CardStack) => void} */ _ => {})

function Index() {
    const [currentStack, setCurrentStack] = React.useState(/** @type {CardStack} */ (null));

    return <div className="text-slate-100">
        <Header />
        <SetCurrentStackContext value={setCurrentStack}>
        {
            currentStack == null 
                ? <CardStacks /> 
                : <Stack currentStack={currentStack} />
        }
        </SetCurrentStackContext>
    </div>
}

ReactDOM.createRoot(document.getElementById("app")).render(<Index />)

