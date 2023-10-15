import { prismaClient } from "../application/database.js";
import { uploadValidation } from "../validation/uploadValidation.js";
import { ResponseError } from "../error/responseError.js";
import { validatedesu } from "../validation/validation.js";
import { uploadFile } from "../middleware/uploadFiles.js";

const upload = async (myImage) => {

    const dataImage = prismaClient.identity.create({
        data: myImage,
        select: {
            id: true,
            image_ktp: true,
            image_sim: true
        }
    })

    return dataImage
}

export {
    upload
}