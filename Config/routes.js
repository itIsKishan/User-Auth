const express = require('express')
const userAuthController = require('../App/controllers/userAuthController')
const route = express.Router()


route.post('/register',userAuthController.register)
route.post('/login',userAuthController.login)
route.get('/user',userAuthController.show)
route.get('/AllUser',userAuthController.all)
route.delete('/AllUser/:id',userAuthController.delete)

module.exports = route