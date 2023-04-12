const User = require("../models/userModel");
const Register = require("../models/registerModel");
const FeesAllotment = require("../models/feesAllotmentModel");
const { resetPassword } = require("../utils/emailTemplates");
const { sendEmail } = require("../utils/sendEmail");
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
    const name = user.name;
    const number = user.number;
    const alloted = user.alloted;
    const feesUpload = user.feesUpload;
    res
      .status(200)
      .json({ name, number, year, gender, email, token, alloted, feesUpload });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a user
const feesUpload = async (req, res) => {
  const { name, feesReceipt, prevAllot } = req.body;

  console.log("inside feesUpload userctrller",req.body);

  try {
    var options = {
      validation: {
        allowedExts: ["pdf"],
        allowedMimeTypes: [
          "text/plain",
          "application/msword",
          "application/x-pdf",
          "application/pdf",
        ],
      },
    };
    const feesReceiptResult = await cloudinary.uploader.upload(feesReceipt, {
      folder: "FeesReceipt",
    });

    const prevAllotmentResult = await cloudinary.uploader.upload(prevAllot, {
      folder: "PrevAllotment",
    });

    const upload = await FeesAllotment.upload({
      name,
      feesReceipt: {
        public_id: feesReceiptResult.public_id,
        url: feesReceiptResult.secure_url,
      },
      prevAllot: {
        public_id: prevAllotmentResult.public_id,
        url: prevAllotmentResult.secure_url,
      },
    });

    const updateUser = await User.findOneAndUpdate(
      { name },
      { feesUpload: "1" },
      {
        returnOriginal: false,
      }
    );
    console.log("FInd ", updateUser);
    res.status(200).json({ upload });
  } catch (error) {
    console.log("Inside feesupload usectrl", error.message);
    res.status(400).json({ error: error.message });
  }
};

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

    res.status(200).json({ name });
  } catch (error) {
    console.log(
      "error inside in catch usercontroller register user ",
      error.message
    );
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const {
    name,
    number,
    branch,
    category,
    year,
    merit,
    address,
    gender,
    email,
    password,
  } = req.body;

  try {
    const user = await User.signup(
      name,
      number,
      branch,
      category,
      year,
      merit,
      address,
      gender,
      email,
      password
    );

    res.status(200).json({
      name,
    });
  } catch (error) {
    console.log("inside signup user catch", error.message);
    res.status(400).json({ error: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.forgot(email);
    console.log(user);
    const newToken = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_RESET_PW_KEY,
      {
        expiresIn: "20m",
      }
    );
    console.log(newToken);
    const emailTemplate = resetPassword(email, newToken);
    sendEmail(emailTemplate);
    res.status(200).json({
      status: true,
      message: "Email for reset password has been sent",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const ResetPassword = async (req, res) => {
  const newToken = req.params.newToken;
  const { newpassword, confirmpassword } = req.body;
  try {
    const decoded = jwt.verify(newToken, process.env.JWT_RESET_PW_KEY);
    console.log(decoded, "inside resetpassoword in usercontroller");

    const user = await User.reset(decoded._id, newpassword, confirmpassword);
    res.status(200).json({
      status: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  signupUser,
  registerUser,
  loginUser,
  forgotPassword,
  ResetPassword,
  feesUpload,
};
