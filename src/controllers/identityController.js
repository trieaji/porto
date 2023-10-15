import { identity } from "../services/identityService.js";

const createIdentity = async (req,res,next) => {
    try {
        // console.log('=== req luur ===')
        // console.log(req)
        let img = req.files
        let request = req.body
        const result = await identity(request, img)
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export {
    createIdentity
}