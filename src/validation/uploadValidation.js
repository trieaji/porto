import Joi from "joi";

const uploadValidation = Joi.object({
    your_name: Joi.string().max(100).optional(),
    image_ktp: Joi.string().max(255).required(),
    image_sim: Joi.string().max(255).required()
})

const updateUploadValidation = Joi.object({
    id: Joi.number().min(1).positive().required(),
    your_name: Joi.string().max(100).optional(),
    image_ktp: Joi.string().max(255).required(),
    image_sim: Joi.string().max(255).required()
})

export {
    uploadValidation,
    updateUploadValidation
}