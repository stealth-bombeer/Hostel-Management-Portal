const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
// name,number,branch,category,year,merit,address,gender,email,password
const Schema = mongoose.Schema;

const registerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  merit: {
    type: String,
    required: true,
  },
  academicYear_institute: {
    type: String,
    required: true,
  },
  
  academicYear_hostel: {
    type: String,
    required: true,
  },
  pname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  stu_Number: {
    type: String,
    required: true,
  },
  parent_Number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gname: {
    type: String,
    required: true,
  },
  gaurdian_address: {
    type: String,
    required: true,
  },
  gaurdian_Number: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  aadhar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  allotment: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  sundertaking: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  pundertaking: {
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
registerSchema.statics.register= async function ({
  name,course,category,semester,merit,academicYear_institute,academicYear_hostel,pname,address,stu_Number,parent_Number,email,gname,gaurdian_address,gaurdian_Number,gender,aadhar,allotment,sundertaking,pundertaking
}
) {
  // validation
  // console.log("image inside model ", image);
  // console.log("name",number)
  if (
    
     ! name
     || !course
     || !category
     || !semester
     || !merit
     || !academicYear_institute
     || !academicYear_hostel
     || !pname
     || !address
     || !stu_Number
     || !parent_Number
     || !email
     || !gname
     || !gaurdian_address
     || !gaurdian_Number
     || !gender
     || !aadhar
     || !allotment
     || !sundertaking
     || !pundertaking

  ) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  // if (!validator.isStrongPassword(password)) {
  //   throw Error("Password not strong enough");
  // }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  // const salt = await bcrypt.genSalt(10);
  // const hash = await bcrypt.hash(password, salt);

  const register = await this.create({
    name,course,category,semester,merit,academicYear_institute,academicYear_hostel,pname,address,stu_Number,parent_Number,email,gname,gaurdian_address,gaurdian_Number,gender,aadhar,allotment,sundertaking,pundertaking
  })

  return register;
};

const Register = new mongoose.model("register", registerSchema);
module.exports = Register;