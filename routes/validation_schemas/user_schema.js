function user_schema(data){

    const Joi = require('joi')
    
    const schema = Joi.object({
        id: Joi.number().integer().required(),
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        address: Joi.string().min(5).max(20),
        password: Joi.string().required().min(8).max(20)


    })

  

const valid = schema.validate(data);
return valid;

   const {error} = schema.validate(req.body)

   if (error){

       res.send(error.details[0].message)
   }
   else{
    res.status(200).send("Valid data")
   }
}

module.exports = user_schema;