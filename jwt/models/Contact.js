const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min:3,
    max:8
  },

  email: {
    type: String,
    required: true,
    min:5,
    max:100
  },
  
  message: {
    type: String,
    required: true,
    min:5,
    max:100
  },
  
  address: {
    type: String, 
    // required: true,
    
  }


  
});

module.exports = mongoose.model("Contact", contactSchema);
