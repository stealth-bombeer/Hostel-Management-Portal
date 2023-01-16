const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);
    const gender = user.gender;
    const year=user.year
    console.log(gender)
    console.log(year)
    res.status(200).json({year,gender, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a user
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
    // create a token
    const token = createToken(user._id);

    res
      .status(200)
      .json({
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
        token,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
