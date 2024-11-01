const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');


// Create user (Registration)
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const user = new User({ name, email, password });
    await user.save();

    //Generating JWT token
const token = jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn: '1h',});



    // Respond with a success message
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error("Error in createUser:", error); // Log error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

//Login User

const loginUser =  async(req,res)=>{
  try{
    const {email , password}= req.body
    const user = await User.findOne({ email });
    if(!user){
      return
      res.status(400).json({message:"invalid credentials"});
    }

    //comparing password

    const isMatch = await user.comparePassword(password);
    if(!isMatch){
      return
      res.status(400).json({message:'invalid credentials'})
    }
    //generating jwt token
    const token = jwt.sign({ id : user._id},process.env.JWT_SECRET,{expiresIn:'1h',})
res.status(200).json({message:'login successfully',token})
  }catch(Error){
    console.log("error in logging is",Error);
    res.status(500).json({message:'server error'})
    
  }
}

module.exports = { createUser, loginUser };
