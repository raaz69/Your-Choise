const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080
require('dotenv').config()
const dbconnect = require('./db/dbconnect')
const product = require('./model/product')
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')

dbconnect()
app.use(express.json());
app.use(cors());
app.use('/', userRoutes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})