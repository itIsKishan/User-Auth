const UserAuth = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userAuthController = {}

userAuthController.register = (req,res) =>{
    const data = req.body
    const userAuth = new UserAuth(data)
    bcrypt.genSalt()
    .then((salt) =>{
        bcrypt.hash(userAuth.password,salt)
        .then((encrypted) =>{
            userAuth.password = encrypted
            userAuth.save()
            .then((user) =>{
                res.json(user)
            })
            .catch((err) =>{
                res.json(err)
            })
            
        })
        .catch((err) =>{
            res.json(err)
        })
    })

    
}

userAuthController.show = (req,res) =>{
    const token = req.header('Authorization')
    let tokenData
    try{
       tokenData =  jwt.verify(token,'kishan123')
       UserAuth.findById(tokenData._id)
       .then((user) =>{
           res.json(user)
       })
       .catch((err) =>{
           res.json(err)
       })
    }
    catch(e){
        res.json(e)
    }
}

userAuthController.all = (req,res) =>{
    UserAuth.find()
    .then((all) =>{
        res.json(all)
    })
}

userAuthController.delete = (req,res) =>{
    UserAuth.findByIdAndDelete(req.params.id)
    .then((one) =>{
        res.json(one)
    })
}
userAuthController.login = (req,res) =>{
    const loginInfo = req.body
    UserAuth.findOne({ email : loginInfo.email})
    .then((user) =>{
        if(!user){
            res.json({errors : 'invalid email or password'})
        }
        console.log(user)
        bcrypt.compare(loginInfo.password,user.password)
        .then((match) =>{
            if(match){
                const tokenData = {
                    _id : user._id,
                    email : user.email,
                    userName : user.userName
                }
                const token = jwt.sign(tokenData,'kishan123',{expiresIn : '2d'})
                res.json({
                    token : token
                })
            } else {
                res.json({ errors : 'invalid email or password'})
            }
        })
    })

}

module.exports = userAuthController