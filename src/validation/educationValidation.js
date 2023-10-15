import Joi from "joi";

const educationValidation = Joi.object({
    major: Joi.string().max(100).required(),
    school: Joi.string().max(100).required()
})

const updateEduValidation = Joi.object({
    id: Joi.number().min(1).positive().required(),
    major: Joi.string().max(100).optional(),
    school: Joi.string().max(100).optional()
})

const getEduValidation = Joi.number().positive().required();

export {
    educationValidation,
    updateEduValidation,
    getEduValidation
}