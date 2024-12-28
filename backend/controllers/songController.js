const getDataurl = require('../utils/urlGenerator.js')
const cloudinary = require('cloudinary')
const Album = require('../models/album.js')

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

    const dataUrl = getDataurl(file);
    console.log(dataUrl);

    res.status(200).send({ message: 'File processed successfully' });

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
const  getAllAlbum=  async (req, res) =>{
  try {
    const  albums = await Album.find()
    res.json(albums)
  } catch (error) {
    console.log("here",error);
    
  }
}
module.exports = createAlbum
module.exports = getAllAlbum

