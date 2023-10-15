import { prismaClient } from "../application/database.js";
import { validatedesu } from "../validation/validation.js";
import { educationValidation, updateEduValidation, getEduValidation } from "../validation/educationValidation.js";
import { ResponseError } from "../error/responseError.js";

// const checkData = async (request, id) => {
//     request = validatedesu(getEduValidation, request)

//     const totalData = await prismaClient.education.count({
//         where: {
//             id: id
//         }
//     })

//     if(totalData !== 1) {
//         throw new ResponseError(404, 'data education is not found')
//     }

//     return id
// }

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

const updateEducation = async (request) => {
    const myEducation = validatedesu(updateEduValidation, request)
    console.log('=== myEducation ===')
    console.log(myEducation)
    const totalDatainEdu = await prismaClient.education.count({
        where: {
            id: myEducation.id
        }
    })
    console.log('=== totalDatainEdu ===')
    console.log(totalDatainEdu)

    if(totalDatainEdu !== 1) {
        throw new ResponseError(404, "data education is not found")
    }

    const dataEdu = prismaClient.education.update({
        where: {
            id: myEducation.id
        },
        data: {
            major: myEducation.major,
            school: myEducation.school
        }
    })

    return dataEdu
    
}

export {
    dbCreateEducation,
    updateEducation
}