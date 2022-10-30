const express = require("express")
const https = require('https')
const fs = require('fs')
const ejs = require('ejs')
const app = express()
const port = 5000

app.use(express.static(__dirname + '/leele-react/build'))
app.set('views', __dirname + '/leele-react/build')
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

app.get('*', (req, res) => {
    res.render('./leele-react/build/index.html')
})

const options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}

https.createServer(options, app).listen(port)

console.log(`Server is listening on ${port}`)


// express
// const express = require("express")
// const app = express()
// const port = process.env.PORT || 5000

// app.use(express.static(__dirname + '/leele-react/build'))
// app.set('views', __dirname + '/leele-react/build')
// app.engine('html', require('ejs').renderFile)
// app.set('view engine', 'html')

// app.get('/test', (req, res) => {
//     res.json([{ id: 1, username: "cyl" }])
// })

// app.get('*', (req, res) => {
//     res.render('./leele-react/build/index.html')
// })

// app.listen(port, () => {
//     console.log(`Express is listening on ${port}`)
// })