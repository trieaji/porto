import Joi from "joi";

const uploadValidation = Joi.object({
    your_name: Joi.string().max(100).required(),
    image_ktp: Joi.string().max(255).required(),
    image_sim: Joi.string().max(255).required()
})

export {
    uploadValidation
}