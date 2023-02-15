const Admin = require('../models/adminModel')
const Blockfloor = require('../models/blockSchema')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginAdmin = async (req, res) => {
  const {email, password} = req.body

  try {
    const admin = await Admin.login(email, password)

    // create a token
    const token = createToken(admin._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupAdmin = async (req, res) => {
  const {email, password} = req.body

  try {
    const admin = await Admin.signup(email, password)

    // create a token
    const token = createToken(admin._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}
const getallBlocks = async (req, res) => {
  const id = req.id;

  const names = await Blockfloor.find({ id}).sort({ createdAt: 1 });

  res.status(200).json(names);
};

module.exports = { signupAdmin, loginAdmin,getallBlocks }