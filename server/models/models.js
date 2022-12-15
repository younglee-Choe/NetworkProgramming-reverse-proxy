const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "leeleDB"
})

connection.connect(function(err) {
    if(err) throw err
    console.log("Connected to MySQL")
})

module.exports = connection