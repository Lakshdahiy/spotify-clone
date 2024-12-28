const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Playlist = require('../models/Playlist');
const generateToken = require('../utils/generateToken.js')


const  dotenv =require("dotenv");
dotenv.config();


// Create user (Registration)
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashpassword = await bcrypt.hash(password,10)

    // Create a new user
    const user = new User({ name, email, password:hashpassword });
    await user.save();

    generateToken(user._id,res)
   
// Respond with a success message
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error("Error in createUser:", error); // Log error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

//login user

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

   generateToken(user._id,res)

    res.status(200).json({ message: 'Login successful'});
  } catch (error) {
    console.error('Error in loginUser:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const myProfile = async (req, res) => {
  try {
    
    const user = await User.findById(req.user._id)
    res.json(user)

    

    
  } catch (error) {
    console.error("Error in myProfile:", error);
    res.status(500).json({ message: 'Server error' });
  }
};
const logoutUser = async (req, res) => {
  try {
    
    res.cookie("token","",{maxAge:0})
    res.json({
      message:"logged out successfully"
    })

    

    
  } catch (error) {
    console.error("Error in myProfile:", error);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = { createUser, loginUser , myProfile,logoutUser };
