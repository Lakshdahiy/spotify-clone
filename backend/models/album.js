const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String,
        required:true
    },
    thumbnail:{
        id:String,
        url:String,
    },
},{
    timestamps : true
})

 const Album = mongoose.model('Album',albumSchema);
 module.exports =Album ;