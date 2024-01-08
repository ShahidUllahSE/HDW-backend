const userRoute= require("express").Router();

const Joi = require("joi");

const bcrypt= require('bcrypt')

const user_schema = require('./validation_schemas/user_schema')

userRoute.get("/" , ( req, res )=> {
    res.send(" user list ")

})







userRoute.post("/", async( req, res) => {

    // res.send(" user added ")



    const {error} = user_schema(req.body)
  


   if (error){

       res.send(error.details[0].message)
   }
   else{

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash( req.body.password , salt )
    res.status(200).send(hash)
   }
})

userRoute.patch("/" , ( req, res ) => {
    res.send (" user uptaing ... ")

})

userRoute.delete("/" , ( req, res ) => {
    res.send(" user deleted ")
})

module.exports = userRoute;