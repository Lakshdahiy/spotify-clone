const jwt = require('jsonwebtoken')
const generateToken = (id,res)=>{
    const token = jwt.sign({id} ,process.env.JWT_SECRET,{
        expiresIn:'15d',
    })
    res.cookie("token",token,{
        maxAge:15*24*60*60*100,
        httpOnly:true
    })
}
module.exports= generateToken
