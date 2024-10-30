const mongoose= require("mongoose");
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

 const User = mongoose.model('User',UserSchema);
 module.exports =User ;