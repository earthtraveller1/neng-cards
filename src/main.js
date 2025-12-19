import express from "express"
import { Collection, MongoClient, ObjectId } from "mongodb"

/**
 * @typedef {import("./common.js").Card} Card
 * @typedef {import("./common.js").CardStack} CardStack
 */

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
    /** @type {Collection<CardStack> }*/
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
            stackArray.push(stack)
        }

        res.json(stackArray)
    })

    app.post("/api/stacks/:stackId/cards", async (req, res) => {
        const stackId = req.params.stackId
        const query = { _id: new ObjectId(stackId) }

        /** @type {Card} */
        let newCard = { _id: new ObjectId(), frontText: "", backText: ""}

        if (req.body.frontText == undefined) {
            res.json({ error: "Required 'frontText' field missing."} )
            res.sendStatus(400)
            return
        }

        newCard.frontText = req.body.frontText

        if (req.body.backText == undefined) {
            res.json({ error: "Required 'backText' field missing." })
            res.sendStatus(400)
            return
        }

        newCard.frontText = req.body.frontText

        const update = { $push: { cards: newCard }}

        cardstacks.updateOne(query, update)
    })

    app.post("/api/stacks", async (req, res) => {
        /** @type {CardStack} */
        let newStack = { name: "", cards: []}

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
