const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
  
// User Login Logic 
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const userExist = await User.findOne({ username });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials " });
    }

    // Compare the entered password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, userExist.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // If username and password are valid, generate a token and send it in the response
    const token = jwt.sign({ userId: userExist._id }, 'your-secret-key');
    res.status(200).json({
      msg: "Login Successful",
      token: token, 
      userId: userExist._id.toString(),
    });
  } catch (error) {
    console.log(`Error in login: ${error}`);
    res.status(500).json("Internal server error");
  }
};
  
// To send user data - User Logic
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`Error from the user route: ${error}`);
    res.status(500).json("Internal server error");
  }
};

module.exports = { login, user };
