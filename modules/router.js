const express = require('express')
const path = require('path')
const logger = require('morgan')

const employees = require('../api/employees')
const router = express.Router()

router.use(logger('dev'))

//pages routes
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../pages/index.html'))
})

//api routes
router.get('/api/employees', employees.getEmployee)
router.get('/api/employees/:id', employees.getEmployeeById)
router.post('/api/employees', employees.postEmployee)
router.patch('/api/employees', employees.patchEmployee)
router.delete('/api/employees/:id', employees.deleteEmployee)





module.exports = router