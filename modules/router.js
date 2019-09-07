const express = require('express')
const path = require('path')

const employees = require('../api/employees')
const router = express.Router()

//pages routes
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../pages/index.html'))
})

//api routes
router.get('/api/employees', employees)

module.exports = router