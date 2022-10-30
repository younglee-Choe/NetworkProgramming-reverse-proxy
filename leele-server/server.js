const express = require("express")
const https = require('https')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')
const router = require('../leele-react/src/router/routes')

const app = express()
const port = 4041

app.use(express.static(path.join(__dirname, '../leele-react/build')))
app.set('views', __dirname + '../leele-react/build')
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

app.use(router)

const options = {
    key: fs.readFileSync('../key.pem'),
    cert: fs.readFileSync('../cert.pem')
}

https.createServer(options, app).listen(port)

console.log(`Server is listening on ${port}`)
