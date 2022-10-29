const express = require('express')
const path = require('path')

const router = express.Router()

const index = path.join(__dirname, '../../build/index.html')

router.get('/test', (req, res) => {
    res.json([{ id: 1, username: "cyl" }])
})

router.get('*', (req, res) => {
    res.render(index)
})

module.exports = router