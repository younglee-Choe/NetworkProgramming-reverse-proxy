const express = require('express')
const path = require('path')
const router = express.Router()
const connection = require('../models/models')
const API = require('../../views/src/marker-based/axios-instance')

const index = path.join(__dirname, '../../views/build/index.html')
const filePath = path.join(__dirname, '../../views/src/marker-based')

let data

router.get('/marker', (req, res) => {
    res.sendFile(filePath + '/marker-tracking.html')
})

router.post('/marker', (req, res) => {
    console.log("post /marker", req)
    console.log("data", data)
    res.send("success!")
})

router.get('/api/marker', (req, res) => {
    const sqlSelect = 'SELECT * FROM models'
    connection.query(sqlSelect, function(err, result, fields) {
        if(err) throw err
        res.send(result)
        
        data = result
        API(result)
    })
})

router.get('*', (req, res) => {
    res.render(index)
})

module.exports = router