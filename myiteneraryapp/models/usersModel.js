
const mongoose =  require('mongoose')

const userSchema =  new mongoose.Schema({
    firtsName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:[{type:String, required:true}],
    photo:{type:String},
    country:{type:String, required:true},
    from:{type:Array},
    uniqueString:{type:String, required:true},
    emailVerificado:{type:Boolean, required:true},
})

const User = mongoose.model('users', userSchema)
module.exports = User