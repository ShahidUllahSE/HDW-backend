const router = require("express").Router();
const { regValidation , loginValidation }  = require("./validation")
const User= require("./models/User")
router.get("/register" , ( req , res )=>{



})

router.post("/register" , async( req , res )=>{

    const { name , email , password  } = req.body

    const { error } = regValidation( req.body )

    if(error) return res.send(error.details[0].message) // gaurd clause

    const user= new User({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password
    })

try {

  const savedUser = await user.save()
    res.send(savedUser);

}

catch(err){
    res.status(400).send(err);


}


})

router.patch("/register" , ( req , res )=>{

    

})


router.delete("/register" , ( req , res )=>{

    

})

router.get("/login" , ( req , res ) => {

})


router.post("/login" , ( req , res ) => {
    
})


router.patch("/login" , ( req , res ) => {
    
})

router.delete("/login" , ( req , res ) => {

    
})

module.exports= router;