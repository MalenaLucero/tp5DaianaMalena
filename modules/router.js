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

router.get('/api/employees/:id', (req, res)=>{
    res.send(req.params.id)
})

router.post('/api/employees', (req, res)=>{
    let data = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    }
    res.json(data)
})

module.exports = router