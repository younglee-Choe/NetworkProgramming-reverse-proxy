const express = require("express")

const app = express()
const port = "5000"

app.get('/', (req, res) => {
    res.json([{ id: 1, username: "cyl" }])
})

app.listen(port, () => {
    console.log(`Server is listening at ${port}`)
})