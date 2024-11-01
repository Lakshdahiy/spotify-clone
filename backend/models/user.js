const mongoose= require("mongoose");
const bcrypt = require('bcryptjs');

 const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique : true,
    },
    password:{
        type:String,
        required: true,
    },
    playlist: [{ type:mongoose.Schema.Types.ObjectId,ref: 'playlist'
    }],
 });
 //Hash password before saving

 UserSchema.pre('save', async function (next) {
    if (! this.isModified('password')){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next()
 })

 //compare input password and output password

 UserSchema.methods.comparePassword = async function (inputPassword) {
    return await bcrypt.compare(inputPassword,this.password);
    
 }


 const User = mongoose.model('User',UserSchema);
 module.exports =User ;