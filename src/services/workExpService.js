import { prismaClient } from "../application/database.js";
import { validatedesu } from "../validation/validation.js";
import { workExperienceValidation, updateWorkExperienceValidation } from "../validation/workExperienceValidation.js";
import { ResponseError } from "../error/responseError.js";

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

const updateWorkExp = async (request) => {
    const myExp = validatedesu(updateWorkExperienceValidation, request)
    const totalDatainWorkExp = await prismaClient.work_experience.count({
        where: {
            id: myExp.id
        }
    })

    if(totalDatainWorkExp !== 1) {
        throw new ResponseError(404, "data work exp is not found")
    }

    const dataWorkExp = prismaClient.work_experience.update({
        where: {
            id: myExp.id
        },
        data: {
            position: myExp.position,
            skill: myExp.skill,
            workplace: myExp.workplace,
            type_of_work: myExp.type_of_work
        }
    })

    return dataWorkExp
}

export {
    workExpService,
    updateWorkExp
}