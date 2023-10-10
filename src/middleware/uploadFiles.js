import multer from "multer";
import { ResponseError } from "../error/responseError.js";

let uploadFile = async (image) => {
    // console.log('=== imageFile ===')
    // console.log(image)

    // storage
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "uploads")
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + '-' + path.extname(file.originalname)); // Rename the uploaded file
        },
    })

    //fileFilter
    const fileFilter = (req, file, cb) => {
        if(file.fieldname === image) {
            if(!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
                req.fileValidationError = {
                    message: "Only image files are allowed"
                }
                return cb(new ResponseError(403, "Only image files are allowed"), false)
            }
        }
        cb(null, true)
    }

    // max size 
    const sizeInMB = 10
    let maxSize = sizeInMB * 1000 * 1000 // 10mb

    const upload = multer({
        storage,
        fileFilter,
        limits: {
            fieldSize: maxSize
        }
    })

    const multipleUpload = upload.fields([{ name: 'image_ktp', maxCount: 1 }, { name: 'image_sim', maxCount: 1 }])
    // return multipleUpload

    return (req, res, next) => {
        multipleUpload(req, res, function(err) {
            if(req.fileValidationError)
            return res.status(400).send(req.fileValidationError)

            if(!req.file && !err)
            return res.status(400).send({
            message: "Please select files to upload"
            })

            if(err){
                if(err.code === "LIMIT_FILE_SIZE"){
                    return res.status(400).send({
                    message: "Max file size 10MB"
                    })
                }
                return res.status(400).send(err)
            }

            return next()
        })
    }
}

export {
    uploadFile
}