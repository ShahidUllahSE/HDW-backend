const router = require("express").Router();
const { regValidation , loginValidation }  = require("./validation")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const User= require("./models/User")
const verifyToken = require("../routes/verifyToken")

// require(".env/config")
router.get("/register" , verifyToken, ( req , res )=>{

    res.send("we are in regsiter route method:GET")



})

router.post("/register" , async( req , res )=>{

    const { name , email , password, address  } = req.body

    const { error } = regValidation( req.body )

    if(error) return res.send(error.details[0].message) // gaurd clause

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash( password, salt )

  const findUser = await User.findOne({
        email:req.body.email
    })

    if(findUser) return res.status(400).send("email is already registered!!!")

    const user= new User({
        name: req.body.name,
        email:req.body.email,
        password: hash,
        address: address
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


router.post("/login" , async ( req , res ) => {

    const { email, password } = req.body;
   const user= await User.findOne({email:email})
    
   if(!user) return res.status(400).send("email not found!")

   const compare= await bcrypt.compare(password, user.password)

   if(!compare) return res.status(400).send("Invalid password!")

   const token = jwt.sign( {
    // email: user.email}, process.env.TOKEN_SECRET )
    email: user.email}, "shahidd" )

        res.header("auth-token", token ).send(token) // sending in header and another send for sending in body as well

    // res.send(token)

//    res.send("logged in successfully")

    
})


router.patch("/login" , ( req , res ) => {
    
})

router.delete("/login" , ( req , res ) => {

    
})

module.exports= router;