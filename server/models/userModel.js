const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
// name,number,branch,category,year,merit,address,gender,email,password
const Schema = mongoose.Schema

const userSchema = new Schema({
  name:{
    type:String,
    required:true,
  },
  number:{
    type:String,
    required:true,
  },
  branch:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true,
  },
  year:
  {
    type:String,
    required:true,
  },
  merit:{
    type:String,
    required:true,
  },
  address:{
    type:String,
    required:true,
  },
  gender:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

// static signup method
userSchema.statics.signup = async function(name,number,branch,category,year,merit,address,gender,email,password) {

  // validation
  if (!email || !password || !name || !number || !branch || !category || !year || !merit || !address || !gender) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash ,name,number,branch,category,year,merit,address,gender})

  return user
}

// static login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

const User=new mongoose.model('User', userSchema)
module.exports=User;