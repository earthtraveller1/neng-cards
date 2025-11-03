import * as ReactDOM from "react-dom/client"
import * as React from "react"
import Header from "./components/Header.js"
import CardStacks from "./components/CardStacks.js"

function Index() {
    return <div className="text-slate-100">
        <Header />
        <CardStacks />
    </div>
}

ReactDOM.createRoot(document.getElementById("app")).render(<Index />)

