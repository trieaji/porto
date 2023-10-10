import Joi from "joi";

const workExperienceValidation = Joi.object({
    position: Joi.string().max(100).required(),
    skill: Joi.string().max(100).required(),
    workplace: Joi.string().max(100).required(),
    type_of_work: Joi.string().valid('Santai', 'Internship').required(),
    date_experience : Joi.date().required()
})

export {
    workExperienceValidation
}