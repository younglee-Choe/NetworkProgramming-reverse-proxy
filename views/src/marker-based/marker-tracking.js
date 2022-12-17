const axios = require('axios')

let modelSrc

async function handleGetAPI() {
    axios.get('/marker')
    .then(function(res) {
        console.log("yaaaaaaaaa")
    })
    .catch(function(err) {
        console.log(err)
    })
}

async function handlePostAPI() {
    axios.post('/api/marker')
    .then(function(res) {
        modelSrc = res.data[0].url
        console.log("modelSrc", document.getElementById("bowser").id)
    })
    .catch(function(err) {
        console.log(err)
    })
}

function handleChange() {
    console.log("modelSrc ", modelSrc)
}

// document.querySelector('#btn-model-change').addEventListener('click', handleChange)

module.exports = { handleGetAPI, handlePostAPI, handleChange }