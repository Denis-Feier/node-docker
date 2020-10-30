const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./src/route')

const PORT = process.env.PORT || 3000;

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})