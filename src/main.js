import express from "express"

function main() {
    const app = express()
    let port = 6969
    if (process.env.PORT != undefined && Number.isInteger(process.env.PORT)) {
        port = process.env.PORT
    }

    app.use(express.static("dist"))

    app.get("/", (_req, res) => {
        res.sendFile(`${process.cwd()}/index.html`)
    })

    app.listen(port, () => {
        console.log(`Listeing on *:${port}`)
    })
}

main()
