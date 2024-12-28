const User = require('../models/user.js')
const jwt = require('jsonwebtoken');

const isAuth = async(req,res,next)=>{
  try {
    const token = req.cookies.token
    if(!token)return res.status(403).json({message:'please login'})
      const decodedData = jwt.verify(token,process.env.JWT_SECRET)
    if(!decodedData) return res.status(500).json({message:'token expired'})
      req.user = await User.findById(decodedData.id);
    next()
  }
 catch (error) {
  console.log('error in auth is',error);
  
    res.status(500).json({message:'please login'})
  }
}

module.exports = isAuth;

