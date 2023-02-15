const Clerk = require('../models/clerkModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginClerk = async (req, res) => {
  const {email, password} = req.body

  try {
    const clerk = await Clerk.login(email, password)

    // create a token
    const token = createToken(clerk._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupClerk = async (req, res) => {
  const {email, password} = req.body

  try {
    const clerk = await Clerk.signup(email, password)

    // create a token
    const token = createToken(clerk._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupClerk, loginClerk }