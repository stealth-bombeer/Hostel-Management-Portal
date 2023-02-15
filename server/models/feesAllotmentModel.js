const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const fs = require("fs");
const isPDF = require("is-pdf-valid");
// name,number,branch,category,year,merit,address,gender,email,password
const Schema = mongoose.Schema;

const feesAllotmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  feesReceipt: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  prevAllot: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

// static signup method
feesAllotmentSchema.statics.upload = async function ({
  name,
  feesReceipt,
  prevAllot,
}) {
  console.log(name, "namedugu");
  if (!name || !feesReceipt || !prevAllot) {
    throw Error("All fields must be filled");
  }
  //   const file = fs.readFileSync("./test.pdf")
  //   console.log(isPDF(file));

  const upload = await this.create({
    name,
    feesReceipt,
    prevAllot,
  });

  return upload;
};

const FeesAllotment = new mongoose.model("upload", feesAllotmentSchema);
module.exports = FeesAllotment;
