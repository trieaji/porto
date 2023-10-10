import { prismaClient } from "../application/database.js";
import { profileValidation } from "../validation/profileValidation.js";
import { ResponseError } from "../error/responseError.js";
import { validatedesu } from "../validation/validation.js";
import { uploadOneFile } from "../middleware/uploadOneFile.js";

const profileService = async (img,request) => {
    console.log('=== img ===')
    console.log(img)
    // console.log('=== request ===')
    // console.log(request)
    let uploadOne = await uploadOneFile(img)
    console.log('=== uploadOne ===')
    console.log(uploadOne)
}

export {
    profileService
}