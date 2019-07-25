<<<<<<< HEAD
const multer = require('multer');
const photoPath = require('os').homedir + "/Alliance/child benefit attachment/";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(photoPath);
        cb(null, photoPath)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})
var upload = multer({ storage: storage })

=======
const multer = require('multer');
const photoPath = require('os').homedir + "/Alliance/child benefit attachment/";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(photoPath);
        cb(null, photoPath)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})
var upload = multer({ storage: storage })

>>>>>>> rtdev/master
module.exports = upload;