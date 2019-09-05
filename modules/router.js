const express = require('express')
const path = require('path')
const router = express.Router()
const users = require('./users')

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../pages/index.html'))
})

module.exports = router