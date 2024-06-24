const volenteerRoute = require("express").Router();
const jwt = require("jsonwebtoken")
const Volenteer = require("./models/Volenteer");
const { volenteerValidation }  = require("./validation")



volenteerRoute.get("/volenteer", async(req, res) => {

   
      });


volenteerRoute.post("/", async (req, res) => {
  const { name,fatherName,institute, email, contact, message,address, profession} = req.body;
  
  const { error } = volenteerValidation(req.body);

  // If validation fails, return the error message
  if (error) return res.status(400).send(error.details[0].message);

  
//   const findUser = await Volenteer.findOne({
//     email:req.body.email
// })

// if(findUser) return res.status(400).send("email is already registered!!!")

  


  const newVolenteer = new Volenteer({
    name,
    fatherName,
    institute,
    email,
    address,
    
    contact,
    profession,
    message,
   
  });

  try {
    const savedVolenteer = await newVolenteer.save();
    res.send(savedVolenteer);
  } catch (err) {
    res.status(400).send(err);
  }
});



module.exports = volenteerRoute;



// const router = require("express").Router();
// const { regValidation , loginValidation }  = require("./validation")
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken")
// const Volenteer = require("./models/Volenteer");
// const verifyToken = require("../routes/verifyToken")
// const volenteerRoute = require("express").Router();


// // require(".env/config")
// volenteerRoute.get("/volenteer" , verifyToken, ( req , res )=>{

//     res.send("we are in regsiter route method:GET")



// })

// volenteerRoute.post("/volenteer" , async( req , res )=>{

//   const { name, email, contact, message, profession,fatherName, institute} = req.body;

//     const { error } = regValidation( req.body )

//     if(error) return res.send(error.details[0].message) // gaurd clause


//   const findUser = await Volenteer.findOne({
//         email:req.body.email
//     })

//     if(findUser) return res.status(400).send("email is already registered!!!")

//     const newVolenteer = new Volenteer({
//           name,
//           email,
//           contact,
//           message,
//           profession,
//           fatherName,
//           institute
         
//         });

//         try {
//               const savedVolenteer = await newVolenteer.save();
//               res.send(savedVolenteer);
//             } catch (err) {
//               res.status(400).send(err);
//             }




// })



module.exports = volenteerRoute;
