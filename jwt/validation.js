const Joi = require("joi")

module.exports = function validation( data ) {

    const schema = Joi.object({
        name:Joi.string().required().min(3).max(8),
        
        email: Joi.string().email().required(),

        password: Joi.string().required(),

        adress: Joi.string().min(5).max(10)
    })

    schema.validate(data)
    

}