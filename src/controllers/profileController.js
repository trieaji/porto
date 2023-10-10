import { profileService } from "../services/profileService.js";

const createProfile = async (req,res,next) => {
    try {
        // console.log('=== req luur ===')
        // console.log(req)
        let img = req.file
        let request = req.body
        const result = await profileService(img,request)
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export {
    createProfile
}