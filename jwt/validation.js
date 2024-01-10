const Joi = require("joi")

 function regValidation( data ) {

    const schema = Joi.object({
        name:Joi
        .string()
        .required()
        .min(3)
        .max(8),
        
        email: Joi
        .string()
        .email()
        .required(),

        password: Joi
        .string()
        .required()
        .min(3)
        .max(8),

        adress: Joi
        .string()
        .min(5)
        .max(10)
    })

    const valid = schema.validate(data)
    return valid;
   

}


function loginValidation ( data )  {


    const schema = Joi.object({
        name:Joi.string()
        .required()
        .min(3)
        .max(8),
        
        password: Joi
        .string().
        required()
        .min(3)
        .max(8),

    })

 const valid = schema.validate(data)
 return valid;



}

module.exports.loginValidation = loginValidation
module.exports.regValidation = regValidation