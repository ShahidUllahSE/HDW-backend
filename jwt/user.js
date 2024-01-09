const router = require("express").Router();
const { regValidation , loginValidation }  = require("./validation")
router.get("/register" , ( req , res )=>{



})

router.post("/register" , ( req , res )=>{

    const { name , email , password , adress } = req.body

    const { error } = regValidation( req.body )

    if(error) return res.send(error.details[0].message) // gaurd clause

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