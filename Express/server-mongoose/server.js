const express = require('express')
const app = express()
const port = 3000
const db = require('./config/db')
app.use(express.json())
const Products = require('./routes/Productroute')

// const Users = require('./routes/UserRoute')

app.get('/',(req, res)=> res.status(200).json({ message: "Welcome" }))
// localhost:3000/
app.use('/products', Products)
// app.use('/users', Users)
// localhost:3000/products
app.listen(port, (() => console.log(`Listening on ${port}`))) 