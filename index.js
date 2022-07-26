const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.send('Hello everyone!')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))