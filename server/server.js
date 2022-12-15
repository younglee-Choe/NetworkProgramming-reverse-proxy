const express = require('express')
const https = require('https')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')
const router = require('./router/routes')

const app = express()
const port = process.env.REACT_APP_PORT || 4041

app.use(express.static(path.join(__dirname, '../views/build')))
app.set('views', __dirname + '../views/build')
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

app.use(router)

const options = {
    key: fs.readFileSync('../key.pem'),
    cert: fs.readFileSync('../cert.pem')
}

https.createServer(options, app).listen(port)

console.log(`Server is listening on ${port}`)
