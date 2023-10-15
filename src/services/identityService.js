import { prismaClient } from "../application/database.js";
import { uploadValidation } from "../validation/uploadValidation.js";
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

export {
    identity
}