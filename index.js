const express = require('express')
const app = express()
const configureDB = require('./Config/database')
const route = require('./Config/routes')

// establishing  connection with db
configureDB()
app.use(express.json())
app.use(route)

app.listen(3050,() =>{
    console.log('i am listening the request')
})
