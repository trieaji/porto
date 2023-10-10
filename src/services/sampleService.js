import { prismaClient } from "../application/database.js";
import { validatedesu } from "../validation/validation.js";
import { sampleValidation } from "../validation/sampleValidation.js";

const createdbSample = async (request) => {
    const mySample = validatedesu(sampleValidation, request)

    const dataSample = prismaClient.sample.create({
        data: mySample,
        select: {
            username: true,
            city: true
        }
    })

    return dataSample
}

export {
    createdbSample
}