const Joi = require("joi")

 function regValidation( data ) {

    const schema = Joi.object({
        name:Joi.string().required().min(3).max(8),
        
        email: Joi.string().email().required(),

        password: Joi.string().required(),

        adress: Joi.string().min(5).max(10)
    })

    schema.validate(data)


}


function loginValidation ( data )  {


    email: Joi.string().email().required(),

    password: Joi.string().required()



}

module.exports.loginValidation = loginValidation
module.exports.regValidation = regValidation