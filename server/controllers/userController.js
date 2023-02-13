const User = require("../models/userModel");
const Register = require("../models/registerModel");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

cloudinary.config({
  cloud_name: "ddyiex0z8",
  api_key: "616962189132742",
  api_secret: "s_7ldYcshqnuvBz7PnYj8E6S9fI",
  secure: true,
});
// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);
    const gender = user.gender;
    const year = user.year;
    console.log(gender);
    console.log(year);
    res.status(200).json({ year, gender, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a user
const registerUser = async (req, res) => {
  const {
    name,
    course,
    category,
    semester,
    merit,
    academicYear_institute,
    academicYear_hostel,
    pname,
    address,
    stu_Number,
    parent_Number,
    email,
    gname,
    gaurdian_address,
    gaurdian_Number,
    gender,
    aadhar,
    allotment,
    sundertaking,
    pundertaking,
  } = req.body;
  // console.log(req.body);
  // const file=req.files.image;
  // let resultUrl;
  // console.log(file);
  // cloudinary.uploader.upload(file.tempFilePath,async (err,result)=>
  // {
  //   resultUrl= result.url;
  //   // console.log(resultUrl)

  // })
  console.log("inside usecontroller :", gender);

  try {
    const aadharResult = await cloudinary.uploader.upload(aadhar, {
      folder: "Aadhar",
    });
    const allotmentResult = await cloudinary.uploader.upload(allotment, {
      folder: "Allotment",
    });
    const sundertakingResult = await cloudinary.uploader.upload(sundertaking, {
      folder: "Student-Undertaking",
    });
    const pundertakingResult = await cloudinary.uploader.upload(pundertaking, {
      folder: "Parent-Undertaking",
    });
    console.log("result of aadhar", aadharResult.public_id);
    console.log("result of pundertaking", pundertakingResult.public_id);
    const register = await Register.register({
      name,
      course,
      category,
      semester,
      merit,
      academicYear_institute,
      academicYear_hostel,
      pname,
      address,
      stu_Number,
      parent_Number,
      email,
      gname,
      gaurdian_address,
      gaurdian_Number,
      gender,
      aadhar: {
        public_id: aadharResult.public_id,
        url: aadharResult.secure_url,
      },
      allotment: {
        public_id: allotmentResult.public_id,
        url: allotmentResult.secure_url,
      },
      sundertaking: {
        public_id: sundertakingResult.public_id,
        url: sundertakingResult.secure_url,
      },
      pundertaking: {
        public_id: pundertakingResult.public_id,
        url: pundertakingResult.secure_url,
      },
    });

    // create a token
    // const token = createToken(user._id);
    // console.log(token);
    // res.status(200).json(1);
    res.status(200).json({
      name,
      gender,
      course,
    });
  } catch (error) {
    console.log("error inside in catch usercontroller", error.message);
    res.status(400).json({ error: error.message });
  }

  // console.log(resultUrl)
};

module.exports = { registerUser, loginUser };
