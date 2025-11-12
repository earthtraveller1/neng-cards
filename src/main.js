import express from "express"
import { MongoClient } from "mongodb"
import { CardStack } from "./common.js"

function main() {
    const app = express()
    let port = 6969
    if (process.env.PORT != undefined && Number.isInteger(process.env.PORT)) {
        port = parseInt(process.env.PORT)
    }

    let databaseURI = "mongodb://127.0.0.1"
    if (process.env.MONGO_URI != undefined) {
        databaseURI = process.env.MONGO_URI
    }

    const client = new MongoClient(databaseURI)
    const database = client.db("neng-cards")
    const cardstacks = database.collection("stacks")

    app.use(express.static("dist"))

    app.get("/", (_req, res) => {
        res.sendFile(`${process.cwd()}/index.html`)
    })

    app.get("/api/stacks", async (_req, res) => {
        // For now, we do not have a database, so we are just going to return
        // some dummy values.
        let stacks = cardstacks.find()

        /** @type Array<CardStack> */
        let stackArray = new Array()
        for await (const stack of stacks) {
            stackArray.push(new CardStack(stack.name, stack._id))
        }

        res.json(stackArray)
    })

    app.listen(port, () => {
        console.log(`Listeing on *:${port}`)
    })
}

main()
