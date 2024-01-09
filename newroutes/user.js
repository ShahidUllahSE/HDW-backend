const router = require("express").Router();

router.get("/register" , ( req , res )=>{



})

router.post("/register" , ( req , res )=>{

    const { name , email , password , adress } = req.body

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(adress);

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