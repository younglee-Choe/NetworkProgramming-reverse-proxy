const express = require("express")
const routes = require('../leele-react/src/router/routes.js')

const app = express()
const port = process.env.PORT || 5000

app.use(routes)

app.listen(port, () => {
    console.log(`Express is listening on ${port}`)
})

// const https = require('https')
// const fs = require('fs')
// const path = require('path')

// const options = {
//     key: fs.readFileSync('../leele-react/private.pem'),
//     cert: fs.readFileSync('../leele-react/public.pem')
// }

// https.createServer(options, function(req, res) {
//     // fs.readFile(path.join(__dirname, '../leele-react/build/index.html'))
//     fs.readFile('../leele-react/build/index.html', function(error, data) {
//         if(error){
//             console.log(error)
//         }
//         else{
//             res.writeHead(200)
//             res.end(data)
//         }
//     })
// }).listen(port)

// console.log(`Server is listening on ${port}`)
