// const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const path = require('path')
// const ejs = require('ejs')
// const mysql = require('mysql')
// const router = require('../router/routes')

// const app = express()
// const port = 5041

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "leeleDB",
// })

// connection.connect(function(err) {
//     if(err) throw err
//     console.log("Connected to MySQL")
// })

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(cors())

// app.use(express.static(path.join(__dirname, '../../build')))
// app.set('views', __dirname + '../../build')
// app.engine('html', ejs.renderFile)
// app.set('view engine', 'html')

// app.use(router)

// app.listen(port, () => {
//     console.log(`Connect at http://${process.env.REACT_APP_HOST}:${port}`)
// })
