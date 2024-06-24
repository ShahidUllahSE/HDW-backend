const Joi = require("joi")

//  function regValidation( data ) {

//     const schema = Joi.object({
//         name:Joi
//         .string()
//         .required()
//         .min(3)
//         .max(8),
        
//         email: Joi
//         .string()
//         .email()
//         .required(),

//         password: Joi
//         .string()
//         .required()
//         .min(3)
//         .max(8),

//         adress: Joi
//         .string()
//         .min(5)
//         .max(10)
//     })

//     const valid = schema.validate(data)
//     return valid;
   

// }


// function loginValidation ( data )  {


//     const schema = Joi.object({
//         name:Joi.string()
//         .required()
//         .min(3)
//         .max(8),
        
//         password: Joi
//         .string().
//         required()
//         .min(3)
//         .max(8),

//     })

//  const valid = schema.validate(data)
//  return valid;



// }


function volenteerValidation ( data )  {


    const schema = Joi.object({
        name:Joi.string()
        .required()
        .min(3)
        .max(20),
        
        fatherName: Joi
        .string().
        required()
        .min(3)
        .max(8),

        institute: Joi
        .string().
        required()
        .min(3)
        .max(15),

        email: Joi
        .string().
        required()
        .min(5)
        .max(30),

        contact: Joi
        .number().
        required()
     ,

        profession: Joi
        .string().
        required()
        .min(4)
        .max(14),

        address: Joi
        .string()
        // required(),
        // .min(3)
        // .max(20)
        ,

        message: Joi
        .string().
        required()
        .min(5)
        .max(30)

    })

 const valid = schema.validate(data)
 return valid;



}

module.exports.volenteerValidation = volenteerValidation
// module.exports.loginValidation = loginValidation
// module.exports.regValidation = regValidation





function contactValidation ( data )  {


    const schema = Joi.object({
        name:Joi.string()
        .required()
        .min(3)
        .max(20),
        


        email: Joi
        .string().
        required()
        .min(5)
        .max(30),

        address: Joi
        .string()
        // required(),
        // .min(3)
        // .max(20)
        ,

        message: Joi
        .string().
        required()
        .min(5)
        .max(30)

    })

 const valid = schema.validate(data)
 return valid;



}

module.exports.contactValidation = contactValidation
// module.exports.loginValidation = loginValidation
// module.exports.regValidation = regValidation