import { workExpService } from "../services/workExpService.js";

const createWorkExp = async (req,res,next) => {
    try {
        // console.log('=== req luur ===')
        // console.log(req)
        let request = req.body
        const result = await workExpService(request)
        res.status(200).json({
            data: result
        })

    } catch (error) {
        next(error)
    }
}

export {
    createWorkExp
}