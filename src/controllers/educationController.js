import { dbCreateEducation, updateEducation } from "../services/educationService.js";

const createEdu = async (req,res,next) => {
    try {
        const result = await dbCreateEducation(req.body)
        res.status(200).json({
            data:result
        })
    } catch (error) {
        next(error)
    }
}

const updateEdu = async (req,res,next) => {
    try {
        // console.log('=== req ===')
        // console.log(req)
        let prm = req.params.id
        let request = req.body
        request.id = prm
        const result = await updateEducation(request)
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export {
    createEdu,
    updateEdu
}