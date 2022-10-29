const https = require('https')
const fs = require('fs')

const port = process.env.PORT || 5000

const options = {
    key: fs.readFileSync('../../private.pem'),
    cert: fs.readFileSync('../../public.pem')
}

https.createServer(options, function(req, res) {
    fs.readFile('../../build/index.html', function(error, data) {
        if(error){
            console.log(error)
        }
        else{
            res.writeHead(200)
            res.end(data)
        }
    })
}).listen(port)

console.log(`Server is listening on ${port}`)
