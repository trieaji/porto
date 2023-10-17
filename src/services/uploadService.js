import { prismaClient } from "../application/database.js";
import { uploadValidation, updateUploadValidation } from "../validation/uploadValidation.js";
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

const update = async (img) => {
    let myImage = {
        image_ktp : img.image_ktp[0].path,
        image_sim : img.image_sim[0].path,
        id : img.id
    }
    const uploadValidate = validatedesu(updateUploadValidation, myImage)

    const dataImage = prismaClient.identity.update({
        where: {
            id : uploadValidate.id
        },
        data: {
            image_ktp: uploadValidate.image_ktp,
            image_sim: uploadValidate.image_sim
        }
    })

    return dataImage
}

export {
    upload,
    update
}