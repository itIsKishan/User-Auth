const mongoose = require('mongoose')

const configureDB = ()  =>{
    mongoose.connect('mongodb://localhost:27017/user-auth',{
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useFindAndModify : true
    })
    .then((res) =>{
        console.log('Don\'t worry DB is connected')
    })
    .catch((err) =>{
        console.log('Error occured while connecting to the DB')
    })
}

module.exports = configureDB
