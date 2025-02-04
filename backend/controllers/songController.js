const getDataurl = require('../utils/urlGenerator.js')
const cloudinary = require('cloudinary')
const Album = require('../models/album.js');
const Song = require('../models/song.js');

const createAlbum =  async (req, res) =>{
  console.log('File in request:', req.file);
  console.log('Request body:', req.body);
  try {
    if (req.user.role!=='admin') 
      return res.status(403).json({message:'you are not the admin '})

    const { title , description }=  req.body
    
    const file = req.file; 
    if (!file) {
        throw new Error('No file provided');
    }

    const fileurl = getDataurl(file);
  

    const cloud =await cloudinary.v2.uploader.upload(fileurl.content)

    await Album.create({
      title,
      description,
      thumbnail:{
        id:cloud.public_id,
        url:cloud.secure_url
      }
    });
    res.json({
      message:'Album added'
    })
  } catch (error) {
    console.log("error here is ",error);
    
  }
}
const getAllAlbum = async (req,res) =>{
  try {
    const albums = await Album.find({});
    res.json(albums)
  } catch (error) {
    console.log("error in getting all albums ",error);
    
  }
}

const addSong = async (req,res) =>{
  try {
    if (req.user.role!=='admin') 
      return res.status(403).json({message:'you are not the admin '})
    const { title , description,singer,album }=  req.body
    
    const file = req.file; 
    if (!file) {
        throw new Error('No file provided');
    }

    const fileurl = getDataurl(file);
  

    const cloud =await cloudinary.v2.uploader.upload(fileurl.content,{
      resource_type: "video"
    });
    await Song.create({
      title,
      description,
      singer,
      audio:{
        id:cloud.public_id,
        url:cloud.secure_url
      },
      album,
    })
    res.json({
      message:'Song added'})
  } catch (error) {
    console.log("error in adding song ",error);
  }
}
const addThumbnail = async(req,res) =>{
  try {
    if (req.user.role!=='admin') 
      return res.status(403).json({message:'you are not the admin '})

    
    const file = req.file; 

    const fileurl = getDataurl(file);
  

    const cloud =await cloudinary.v2.uploader.upload(fileurl.content)

    await Song.findOneAndUpdate({_id:req.params.id},{
      thumbnail:{
        id:cloud.public_id,
        url:cloud.secure_url
      },
    },{
      new:true
    })
    res.json({
      message:'Thumbnail updated'
    })
  } catch (error) {
    console.log("error in adding thumbnail ",error); 
  }
}
const getAllSongs = async (req,res) =>{
  try {
    const songs = await Song.find();
    res.json(songs)
  } catch (error) {
    console.log("error in getting all songs ",error);
    
  }
}
const getAllSongsByAlbum = async(req,res) =>{
  try {
    const album = await Album.findOne({_id:req.params.id});
    const songs = await Song.find({album:req.params.id});
    res.json({album,songs})
  } catch (error) {
    console.log("error in getting all songs by album ",error);
    
  }
}


module.exports = {createAlbum,getAllAlbum,addSong,addThumbnail,getAllSongs,getAllSongsByAlbum}



