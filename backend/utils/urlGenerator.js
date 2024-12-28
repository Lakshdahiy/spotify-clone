const DataUriParser = require('datauri/parser.js');
const path = require('path');

const getDataurl = (file)=>{
    const parser = new DataUriParser()

    const extname = path.extname(file.originalname).toString()
    return parser.format(extname,file.buffer)
}
module.exports = getDataurl;