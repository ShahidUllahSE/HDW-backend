const contactRoute = require("express").Router();
const jwt = require("jsonwebtoken")
const Contact = require("./models/Contact");
const { contactValidation }  = require("./validation")

contactRoute.get("/contact", async(req, res) => {
  // Handle your GET request logic here
});

contactRoute.post("/", async (req, res) => {
  // Validate the request body
  const { error } = contactValidation(req.body);

//   // If validation fails, return the error message
  if (error) return res.status(400).send(error.details[0].message);

  // Check if the email is already registered (uncomment if needed)
  // const findUser = await Volenteer.findOne({ email: req.body.email });
  // if (findUser) return res.status(400).send("Email is already registered!!!");

  // Create a new contact using the validated data
  const { name, address, email, message } = req.body;
  const newContact = new Contact({
    name,
    email,
    address,
    message,
  });

  try {
    // Save the new contact to the database
    const savedContact = await newContact.save();
    res.send(savedContact);
  } catch (err) {
    // Handle database errors
    res.status(400).send(err);
  }
});

module.exports = contactRoute;
