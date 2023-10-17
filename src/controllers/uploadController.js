import { upload, update } from "../services/uploadService.js";

const uploadImage = async (req,res,next) => {
    try {
        // console.log('=== req luur ===')
        // console.log(req)
        // let img = req.files.image_ktp[0].path
        // img = req.files.image_sim[0].path
        let img = req.files
        let myImage = {
            image_ktp : img.image_ktp[0].path,
            image_sim : img.image_sim[0].path
        }
        // let request = req.body
        // request = myImage
        // request = myImage
        const result = await upload(myImage)
        res.status(200).json({
            data: result
        })

    } catch (error) {
        next(error)
    }
}

const updateImage = async (req,res,next) => {
    try {
        // console.log('=== req luur ===')
        // console.log(req)
        let prm = req.params.id
        // let request = req.body
        // request.id = prm
        // console.log('=== request ===')
        // console.log(request)
        let img = req.files
        img.id = prm
        const result = await update(img)
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
} 

export {
    uploadImage,
    updateImage
}

