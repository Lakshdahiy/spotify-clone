const DataUriPraser = require('datauri/parser.js');
const path = require('path');

const getDataurl = (file) => {
    const parser = new DataUriPraser();

    const extName = path.extname(file.originalname).toString(); 
    return parser.format(extName.toString(), file.buffer);
    
}; 
module.exports = getDataurl;  
 
