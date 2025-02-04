const multer = require('multer');

// Store files in memory instead of disk
const storage = multer.memoryStorage();

const uploadFile = multer({ storage }).single('file');

module.exports = uploadFile;

