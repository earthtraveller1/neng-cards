import express from "express"
import { MongoClient, ObjectId } from "mongodb"
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
            stackArray.push(new CardStack(stack.name, stack._id.toString(), stack.cards))
        }

        res.json(stackArray)
    })

    app.post("/api/stacks", async (req, res) => {
        /** @type {NewCardStack} */
        let newStack = new NewCardStack("")

        if (req.body.name == undefined) {
            res.json({ error: "Required `name` field missing." })
            res.sendStatus(400)
            return
        }

        newStack.name = req.body.name

        try {
            cardstacks.insertOne(newStack)
            res.sendStatus(200)
        } catch (e) {
            res.sendStatus(500)
        }
    })

    app.delete("/api/stacks/:stackId", async (req, res) => {
        try {
            cardstacks.deleteOne({ _id: new ObjectId( req.params.stackId ) })
            res.sendStatus(200)
        } catch (e) {
            res.json(e)
            res.sendStatus(400)
        }
    })

    app.listen(port, () => {
        console.log(`Listeing on *:${port}`)
    })
}

main()
