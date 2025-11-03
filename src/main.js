import express from "express"
import { CardStack } from "./common.js"

function main() {
    const app = express()
    let port = 6969
    if (process.env.PORT != undefined && Number.isInteger(process.env.PORT)) {
        port = parseInt(process.env.PORT)
    }

    app.use(express.static("dist"))

    app.get("/", (_req, res) => {
        res.sendFile(`${process.cwd()}/index.html`)
    })

    app.get("/api/stacks", (_req, res) => {
        // For now, we do not have a database, so we are just going to return
        // some dummy values.
        res.json([
            new CardStack("Chemistry", 0),
            new CardStack("Biology", 1),
            new CardStack("Yeezy", 2)
        ])
    })

    app.listen(port, () => {
        console.log(`Listeing on *:${port}`)
    })
}

main()
