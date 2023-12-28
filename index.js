require('dotenv').config()
const express = require('express')

const app = express()

const port = 5000

app.get('/', (req, res) => {
	res.send("Hello World")
})

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on port ${process.env.PORT}...`)
})

