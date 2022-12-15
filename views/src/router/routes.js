const express = require('express')
const path = require('path')
const router = express.Router()
const connection = require('../server/server')

const index = path.join(__dirname, '../../build/index.html')
const filePath = path.join(__dirname, '../marker-based')

router.get("/marker", (req, res) => {
    res.sendFile(filePath + '/marker-tracking.html')
})
 
// router.get('/api/models', (req, res) => {
//     console.log(res)
// })

router.get('*', (req, res) => {
    res.render(index)
})

module.exports = router