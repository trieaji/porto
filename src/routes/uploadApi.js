import express from "express"
import { uploadFile } from "../middleware/uploadFiles.js";
import { uploadOneFile } from "../middleware/uploadOneFile.js";
import { uploadImage, updateImage } from "../controllers/uploadController.js";
import { createIdentity, updateIdentity } from "../controllers/identityController.js";
import { createProfile } from "../controllers/profileController.js";

import multer from "multer";
// const upload = multer({dest: 'uploads/'})
const upload = multer({dest: 'uploads/'})

const uploadRouter = new express.Router();
// uploadRouter.use(uploadFile)

const cpUpload =  upload.fields([{ name: 'image_ktp', maxCount: 1 },{ name: 'image_sim', maxCount: 1 }])
const oneUpload = upload.single('image')
// const testUpload = uploadFile

//multiple upload
uploadRouter.post('/api/upload', cpUpload, uploadImage) // untuk upload image saja
uploadRouter.post('/api/identity', cpUpload,createIdentity) // gk hanya untuk upload image saja
uploadRouter.patch('/api/upload/update/:id', cpUpload, updateImage)
uploadRouter.patch('/api/identity/update/:id', cpUpload, updateIdentity)

//profiles
uploadRouter.post('/api/profiles', oneUpload, createProfile)

export {
    uploadRouter
}


// app.post('/upload', upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]), (req, res) => {
//     // Access the uploaded file information using req.file
//     if (!req.files) {
//       return res.status(400).send('No file uploaded.');
//     }
//     res.send('File uploaded successfully.');
//   });