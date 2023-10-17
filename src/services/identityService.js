import { prismaClient } from "../application/database.js";
import { uploadValidation, updateUploadValidation } from "../validation/uploadValidation.js";
import { validatedesu } from "../validation/validation.js";
import { uploadFile } from "../middleware/uploadFiles.js";

const identity = async (request, img) => {
    let myImage = {
        image_ktp : img.image_ktp[0].path,
        image_sim : img.image_sim[0].path,
        your_name : request.your_name
    }

    const dataImage = await prismaClient.identity.create({
        data: myImage,
        select: {
            id: true,
            your_name: true,
            image_ktp: true,
            image_sim: true
        }
    })

    return dataImage
}

const update = async (request, img) => {
    let myImage = {
        image_ktp : img.image_ktp[0].path,
        image_sim : img.image_sim[0].path,
        your_name : request.your_name,
        id : img.id
    }
    const uploadValidate = validatedesu(updateUploadValidation, myImage)

    const dataImage = prismaClient.identity.update({
        where: {
            id : uploadValidate.id
        },
        data: {
            your_name: uploadValidate.your_name,
            image_ktp: uploadValidate.image_ktp,
            image_sim: uploadValidate.image_sim
        }
    })

    return dataImage
}

export {
    identity,
    update
}