import { createRoot } from "react-dom/client"
import * as React from "react"

function Home() {
    const [internal, setInternal] = React.useState("")

    return (
        <>
            <h1>Hello, world!</h1>

            <button onClick={async () => {
                const result = await fetch("/api/foo")
                const resultBody = await result.text()
                setInternal(resultBody)
            }}>Hello!</button>

            <p>Internal: {internal}</p>
        </>
    )
}

function main() {
    const appRoot = document.getElementById("app")
    if (appRoot == null) {
        console.error("Failed to obtain the application root.")
        return
    }

    const app = createRoot(appRoot)
    app.render(<Home />)
}

main()
