const express = require('express')
const logger = require('morgan')
const server = express()
const router = require('./modules/router')
const port = 3000

server.use(logger('dev'))
server.use('/', router)
server.use(express.static('public'))

server.listen(port, () =>{
    console.log(`Running on port ${port}`)
})