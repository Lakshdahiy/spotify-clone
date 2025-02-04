const express =require('express');
const mongoose=require('mongoose');
const  dotenv =require("dotenv");
const cors=require('cors');
const userRoutes = require('./routes/userRoutes');
const playlistRoutes = require('./routes/playlistRoutes')
const songRoutes = require('./routes/songRoutes');
const cookieParser = require ('cookie-parser')
const cloudinary = require('cloudinary');



dotenv.config();

cloudinary.v2.config({
    cloud_name: process.env.Cloud_Name,
    api_key:process.env.cloud_Api,
    api_secret:process.env.Cloud_Secret
})

const app = express();

const PORT= process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(cookieParser())


app.get('/',(req,res)=>{
    res.send('welcome to spotify clone')   
});

mongoose.connect('mongodb+srv://lakshdahiya2005:9896096559@cluster0.a5ayaeu.mongodb.net/spotify_clone'
    ).then(()=>
    console.log("mongoose is connected")

).catch((err) => console.log(Error)

)



//use the routes

app.use('/api/user',userRoutes);
app.use('/api/playlist',playlistRoutes);
app.use('/api/song',songRoutes);





//Start server

app.listen(PORT,() =>{
    console.log(`server is running on http://localhost:${PORT}`);
    
});
