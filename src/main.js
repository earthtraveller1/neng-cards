import express from "express"
import { MongoClient } from "mongodb"
import { CardStack, NewCardStack } from "./common.js"

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
    app.use(express.json())

    app.get("/", (_req, res) => {
        res.sendFile(`${process.cwd()}/index.html`)
    })

    app.get("/api/stacks", async (_req, res) => {
        let stacks = cardstacks.find()

        /** @type Array<CardStack> */
        let stackArray = new Array()
        for await (const stack of stacks) {
            stackArray.push(new CardStack(stack.name, stack._id.toString()))
        }

        res.json(stackArray)
    })

    app.post("/api/stacks", async (req, res) => {
        if (!(req.body instanceof NewCardStack)) {
            res.sendStatus(400)
            return
        }

        let newStack = req.body
        try {
            cardstacks.insertOne(newStack)
        } catch (e) {
            res.sendStatus(500)
        }
    })

    app.listen(port, () => {
        console.log(`Listeing on *:${port}`)
    })
}

main()
