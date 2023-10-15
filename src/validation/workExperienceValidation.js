import Joi from "joi";

const workExperienceValidation = Joi.object({
    position: Joi.string().max(100).required(),
    skill: Joi.string().max(100).required(),
    workplace: Joi.string().max(100).required(),
    type_of_work: Joi.string().valid('Santai', 'Internship').required()
})

const updateWorkExperienceValidation = Joi.object({
    id: Joi.number().min(1).positive().required(),
    position: Joi.string().max(100).optional(),
    skill: Joi.string().max(100).optional(),
    workplace: Joi.string().max(100).optional(),
    type_of_work: Joi.string().valid('Santai', 'Internship').optional()
})

export {
    workExperienceValidation,
    updateWorkExperienceValidation
}