import Joi from "joi";

const sampleValidation = Joi.object({
    username: Joi.string().max(100).optional(),
    city: Joi.string().max(100).optional() 
})

export {
    sampleValidation
}