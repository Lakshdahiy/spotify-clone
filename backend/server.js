const express =require('express');
const mongoose=require('mongoose');
const  dotenv =require("dotenv");
const cors=require('cors');

dotenv.config();

const app = express();

const PORT= process.env.PORT || 5000;

app.use(cors());

app.use(express.json());


app.get('/',(req,res)=>{
    res.send('welcome to spotify clone')   
});

mongoose.connect('mongodb+srv://lakshdahiya2005:9896096559@cluster0.a5ayaeu.mongodb.net/spotify_clone'
    ).then(()=>
    console.log("mongoose is connected")

).catch((err) => console.log(Error)

)


const userRoutes = require('./routes/userRoutes');
//use the routes

app.use('/api/users',userRoutes);



//Start server

app.listen(PORT,() =>{
    console.log(`server is running on http://localhost:${PORT}`);
    
});
