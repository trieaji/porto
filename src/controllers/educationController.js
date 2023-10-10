import { dbCreateEducation } from "../services/educationService.js";

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

export {
    createEdu
}