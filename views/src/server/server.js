const express = require('express')
const https = require('https')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')
const mysql = require('mysql')
const router = require('../router/routes')

const app = express()
const port = process.env.REACT_APP_PORT || 4041

app.use(express.static(path.join(__dirname, '../../build')))
app.set('views', __dirname + '../../build')
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "leeleDB",
})

connection.connect(function(err) {
    if(err) throw err
    console.log("Connected to MySQL")
})

app.get('/api/models', (req, res) => {
    const sqlSelect = 'SELECT * FROM models'
    connection.query(sqlSelect, function(err, result, fields) {
        if(err) throw err
        console.log("result", result)

        res.send(result)
    })
})

app.use(router)

const options = {
    key: fs.readFileSync('../../../key.pem'),
    cert: fs.readFileSync('../../../cert.pem')
}

https.createServer(options, app).listen(port)

console.log(`Server is listening on ${port}`)
