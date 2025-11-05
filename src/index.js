import * as ReactDOM from "react-dom/client"
import * as React from "react"
import Header from "./components/Header.js"
import CardStacks from "./components/CardStacks.js"

function Index() {
    return <div className="text-slate-100">
        <Header />
        <h1 className="text-lg text-slate-400 font-bold px-4 pt-4">Your Stacks</h1>
        <CardStacks />
    </div>
}

ReactDOM.createRoot(document.getElementById("app")).render(<Index />)

