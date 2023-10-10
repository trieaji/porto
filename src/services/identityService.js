import { prismaClient } from "../application/database.js";
import { uploadValidation } from "../validation/uploadValidation.js";
import { validatedesu } from "../validation/validation.js";
import { uploadFile } from "../middleware/uploadFiles.js";

const identityService = async (request) => {
    // let uploadFiles = await uploadFile(img);
    // console.log('=== uploadFiles luur ===')
    // console.log(uploadFiles)
    // let data = await uploadFiles.image_ktp
    console.log('=== data ===')
    console.log(request)
    // const myImage = await validatedesu(uploadValidation, request)

    // const dataImage = await prismaClient.identity.create({
    //     data: myImage,
    //     select: {
    //         id: true,
    //         your_name: true,
    //         image_ktp: true,
    //         image_sim: true
    //     }
    // })

    // return dataImage
}

export {
    identityService
}