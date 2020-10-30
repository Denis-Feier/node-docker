const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')

const routes = require('./src/route')

const PORT = process.env.PORT || 3000;
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a+' })

const app = express()
const logger = morgan('common')
const loggerFile = morgan('common', { stream: accessLogStream })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger)
app.use(loggerFile)

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})