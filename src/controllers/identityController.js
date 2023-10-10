import { identityService } from "../services/identityService.js";

const createdbImage = async (req,res,next) => {
    try {
        // console.log('=== req luur ===')
        // console.log(req)
        // let ktp = req.files.image_ktp[0].path
        // console.log('=== ktp ===')
        // console.log(ktp)
        // let sim = req.files.image_sim[0].path
        // console.log('=== sim ===')
        // console.log(sim)
        var request = req.body
        // console.log('=== req luur ===')
        // console.log(request)
        let img = req.files
        // console.log('=== img ===')
        // console.log(img)
        // img.image_ktp[0].path = request
        // img.image_sim[0].path = request
        const result = await identityService(request)
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export {
    createdbImage
}