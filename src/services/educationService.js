import { prismaClient } from "../application/database.js";
import { validatedesu } from "../validation/validation.js";
import { educationValidation } from "../validation/educationValidation.js";
import { ResponseError } from "../error/responseError.js";

const dbCreateEducation = async (request) => {
    const myEdu = validatedesu(educationValidation, request)

    const dataEdu = await prismaClient.education.create({
        data: myEdu,
        select: {
            id: true,
            major: true,
            school: true,
            date_graduate: true
        }
    })

    return dataEdu
}

export {
    dbCreateEducation
}