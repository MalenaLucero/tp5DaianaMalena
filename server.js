const express = require('express')
const logger = require('morgan')
const server = express()
const router = require('./modules/router')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use(logger('dev'))
server.use('/', router)
server.use(express.static('public'))
server.use(cors)

server.listen(port, () =>{
    console.log(`Running on port ${port}`)
})