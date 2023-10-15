import { upload } from "../services/uploadService.js";

const uploadImage = async (req,res,next) => {
    try {
        console.log('=== req luur ===')
        console.log(req)
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

export {
    uploadImage
}