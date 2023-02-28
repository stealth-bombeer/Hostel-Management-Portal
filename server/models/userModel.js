// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const validator = require("validator");
// // name,number,branch,category,year,merit,address,gender,email,password
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   course: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   semester: {
//     type: String,
//     required: true,
//   },
//   merit: {
//     type: String,
//     required: true,
//   },
//   academicYear_institute: {
//     type: String,
//     required: true,
//   },

//   academicYear_hostel: {
//     type: String,
//     required: true,
//   },
//   pname: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   stu_Number: {
//     type: String,
//     required: true,
//   },
//   parent_Number: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   gname: {
//     type: String,
//     required: true,
//   },
//   gaurdian_address: {
//     type: String,
//     required: true,
//   },
//   gaurdian_Number: {
//     type: String,
//     required: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//   },
//   aadhar: {
//     public_id: {
//       type: String,
//       required: true,
//     },
//     url: {
//       type: String,
//       required: true,
//     },
//   },
//   allotment: {
//     public_id: {
//       type: String,
//       required: true,
//     },
//     url: {
//       type: String,
//       required: true,
//     },
//   },
//   sundertaking: {
//     public_id: {
//       type: String,
//       required: true,
//     },
//     url: {
//       type: String,
//       required: true,
//     },
//   },
//   pundertaking: {
//     public_id: {
//       type: String,
//       required: true,
//     },
//     url: {
//       type: String,
//       required: true,
//     },
//   },
// });

// // static signup method
// userSchema.statics.signup= async function ({
//   name,course,category,semester,merit,academicYear_institute,academicYear_hostel,pname,address,stu_Number,parent_Number,email,gname,gaurdian_address,gaurdian_Number,gender,aadhar,allotment,sundertaking,pundertaking
// }
// ) {
//   // validation
//   // console.log("image inside model ", image);
//   // console.log("name",number)
//   if (

//      ! name
//      || !course
//      || !category
//      || !semester
//      || !merit
//      || !academicYear_institute
//      || !academicYear_hostel
//      || !pname
//      || !address
//      || !stu_Number
//      || !parent_Number
//      || !email
//      || !gname
//      || !gaurdian_address
//      || !gaurdian_Number
//      || !gender
//      || !aadhar
//      || !allotment
//      || !sundertaking
//      || !pundertaking

//   ) {
//     throw Error("All fields must be filled");
//   }
//   if (!validator.isEmail(email)) {
//     throw Error("Email not valid");
//   }
//   // if (!validator.isStrongPassword(password)) {
//   //   throw Error("Password not strong enough");
//   // }

//   const exists = await this.findOne({ email });

//   if (exists) {
//     throw Error("Email already in use");
//   }

//   // const salt = await bcrypt.genSalt(10);
//   // const hash = await bcrypt.hash(password, salt);

//   const user = await this.create({
//     name,course,category,semester,merit,academicYear_institute,academicYear_hostel,pname,address,stu_Number,parent_Number,email,gname,gaurdian_address,gaurdian_Number,gender,aadhar,allotment,sundertaking,pundertaking
//   })

//   return user;
// };

// // static login method
// userSchema.statics.login = async function (email, password) {
//   if (!email || !password) {
//     throw Error("All fields must be filled");
//   }

//   const user = await this.findOne({ email });
//   if (!user) {
//     throw Error("Incorrect email");
//   }

//   const match = await bcrypt.compare(password, user.password);
//   if (!match) {
//     throw Error("Incorrect password");
//   }

//   return user;
// };

// const User = new mongoose.model("User", userSchema);
// module.exports = User;

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
// name,number,branch,category,year,merit,address,gender,email,password
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  regid: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  feesUpload:{
    type:String,
    default:'0'
  },
  alloted: {
    type:String,
  }
});

// static signup method
userSchema.statics.signup = async function (
  name,
  number,
  branch,
  category,
  year,
  regid,
  address,
  gender,
  email,
  password
) {
  // validation
  if (
    !email ||
    !password ||
    !name ||
    !number ||
    !branch ||
    !category ||
    !year ||
    !regid ||
    !address ||
    !gender
  ) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hash,
    name,
    number,
    branch,
    category,
    year,
    regid,
    address,
    gender,
  });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

userSchema.statics.forgot = async function (email) {
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!email) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Email not found");
  }
  return user;
};

userSchema.statics.reset = async function (_id, newpassword, confirmpassword) {
  console.log("inside reset usermodel");

  if (!validator.isStrongPassword(newpassword)) {
    throw Error("Password not strong enough");
  }

  if (!newpassword || !confirmpassword) {
    throw Error("All fields must be filled");
  }
  if (newpassword !== confirmpassword) {
    throw Error("Password mismatch");
  }

  const user = await this.findOne({ _id });
  if (!user) {
    throw Error("invalid token");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newpassword, salt);

  this.findByIdAndUpdate(_id, { password: hash }, function (err, docs) {
    if (err) {
      throw Error(err.message);
    } else {
      console.log("Updated User");
    }
  });

  //  user.password
  return user;
};

const User = new mongoose.model("User", userSchema);
module.exports = User;
