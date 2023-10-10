import Joi from "joi"

const profileValidation = Joi.object({
    fullname: Joi.string().max(100).required(),
    image: Joi.string().max(255).required(),
    unduh_resume: Joi.string().max(100).required(),
    email: Joi.string().email().required()
})

export {
    profileValidation
}