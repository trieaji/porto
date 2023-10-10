import { dbCreateImage } from "../services/uploadService.js";

const createImage = async (req,res,next) => {
    try {
        // console.log('=== req luur ===')
        // console.log(req)
        // let img = req.files.image_ktp[0].path
        let img = req.files
        let request = req.body
        const result = await dbCreateImage(img,request)
        res.status(200).json({
            data: result
        })

    } catch (error) {
        next(error)
    }
}

export {
    createImage
}