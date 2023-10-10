import Joi from "joi";

const educationValidation = Joi.object({
    major: Joi.string().max(100).required(),
    school: Joi.string().max(100).required(),
    date_graduate: Joi.date()
})

export {
    educationValidation
}