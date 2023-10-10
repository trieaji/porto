import { prismaClient } from "../application/database.js";
import { validatedesu } from "../validation/validation.js";
import { workExperienceValidation } from "../validation/workExperienceValidation.js";

const workExpService = async (request) => {
    const myWorkExp = validatedesu(workExperienceValidation, request)
    
    const dataWorkExp = prismaClient.work_experience.create({
        data: myWorkExp,
        select: {
            position: true,
            skill: true,
            workplace: true,
            type_of_work: true,
            date_experience: true
        }
    })

    return dataWorkExp
}

export {
    workExpService
}