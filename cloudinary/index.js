const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  //this data is 
    api_key: process.env.CLOUDINARY_KEY,            //present in our
    api_secret: process.env.CLOUDINARY_SECRET       //.env file
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'YelpCamp',
        allowedFormats: ['jpeg', 'png', 'jpg','jfif']
    }
});

module.exports = {
    cloudinary,
    storage
}