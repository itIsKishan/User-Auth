const mongoose = require('mongoose')
const validator = require('validator')
const passwordValidator = require('password-validator')

const verifyPasswod = new passwordValidator()
verifyPasswod.lowercase()
verifyPasswod.uppercase()
verifyPasswod.digits()
verifyPasswod.symbols()
verifyPasswod.not().spaces()

const Schema = mongoose.Schema

const UserAuthSchema = new Schema({
    userName : {
        type : String,
        required : [true, 'userName should be entered'],
        min : 8,
        max : 68,
        unique : [true,'user name should be unique'],
        validate : {
            validator : function(userName){
                return validator.isAlphanumeric(userName)
            },
            message : function(){
                return 'UserName should only contain alphabets and number'
            }
        }
    },
    email : {
        type : String,
        required : [true, 'Email is required'],
        unique : true,
        validate : {
            validator : function (email){
                return validator.isEmail(email)
            },
            message : function (){
                return 'Invalid Email address'
            }
        }
    },
    phoneNumber : {
        type : Number,
        unique : true,
        required : [true, 'Number is required'],
        
    },
    password : {
        type : String,
        unique : true,
        required : [true, 'Password is neccessary to login'],
        min : 8,
        max : 128,
        validate : {
            validator : function(Password){
                return  verifyPasswod.validate(Password)
            },
            message : function(){
                return 'Password should only contain alphabets,numbers and special symbols'
            }
        }
    }
})

// creating the model
const UserAuth = mongoose.model('UserAuth',UserAuthSchema)

module.exports= UserAuth