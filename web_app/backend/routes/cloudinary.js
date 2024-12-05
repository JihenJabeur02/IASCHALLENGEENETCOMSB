const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const CloudRouter = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'djptnmqtl', // Replace with your Cloudinary cloud name
  api_key: '814468686526159',       // Replace with your Cloudinary API key
  api_secret: 'rlmA_IM5t6J787katVguuKdZ9wU', // Replace with your Cloudinary API secret
});

// Set up Multer-Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'mysiibit', // Folder name in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png'], // Allowed file types
  },
});

const upload = multer({ storage });

// Upload endpoint
CloudRouter.post('/upload', upload.single('img'), (req, res) => {
    try {
        // Access the uploaded file's secure URL
        console.log(req.file,req.body)
        const uploadedImageUrl = req.file.path || req.file.secure_url;
    
        if (!uploadedImageUrl) {
          return res.status(400).json({ error: 'Image upload failed' });
        }
    
        res.status(200).json({ secure_url: uploadedImageUrl });
      } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'Failed to upload image' });
      }
});

module.exports = CloudRouter;
