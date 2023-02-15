
const mongoose = require('mongoose')
const {Rejected} = require('../models/model')
const getrejectedstuds = async (req, res) => {
    //const _id = req._id
  console.log("inside get rejected")
  console.log(Rejected)
    const rejected = await Rejected.find({}).sort({createdAt: -1})
  
  try{
    res.status(200).json(rejected)
  
  }
  catch(error)
  {
    res.status(400).json({error: error.message})
  }
  }
  
  module.exports = { getrejectedstuds }  