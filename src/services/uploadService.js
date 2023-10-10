import { prismaClient } from "../application/database.js";
import { uploadValidation } from "../validation/uploadValidation.js";
import { ResponseError } from "../error/responseError.js";
import { validatedesu } from "../validation/validation.js";
import { uploadFile } from "../middleware/uploadFiles.js";

const dbCreateImage = async (img, request) => {
    console.log('=== imgService ===')
    console.log(img)
    let uploadFiles = await uploadFile(img);
    console.log('=== uploadFiles ===')
    console.log(uploadFiles)
    // const myImage = validatedesu(uploadValidation, request)
    // myImage.image_ktp = uploadFiles.image_ktp[0].path
    // myImage.image_sim = uploadFiles.image_sim[1].path

    // const dataImage = prismaClient.identity.create({
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
    dbCreateImage
}