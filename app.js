'use strict'
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello, Node.js and Express!')
})

app.listen(process.env.PORT || 3000)