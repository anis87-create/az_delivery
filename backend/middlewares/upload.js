const multer = require('multer');
const path = require('path');
const fs = require('fs');
const uploadDir = path.join(__dirname, '..', 'uploads');

// Créer le dossier s’il n’existe pas
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir)
    },
    filename: (req, file, cb) => {
      cb(null, Date.now()+ path.extname(file.originalname))
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes= ['image/jpeg', 'image/png', 'image/jpg'];
    if(allowedTypes.includes(file.mimetype)){
        cb(null , true);
    }else {
        cb(new Error('invalid fileType'));
    }
}

const upload = multer({storage, fileFilter});

module.exports = upload;