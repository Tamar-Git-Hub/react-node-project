const mongoose=require('mongoose')

const UsersSchema=new mongoose.Schema({
  name:String,
  password:String,
  phone:String,
  email:String
})

module.exports=mongoose.model('User',UsersSchema)