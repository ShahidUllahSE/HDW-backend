const mongoose = require("mongoose");

const volenteerSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    min:3,
    max:8
  },
  fatherName: {
    type: String,
    required: true,
    min:3,
    max:8
  },
  institute: {
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
  contact: {
    type: Number,
    required: true,
   
    
  },
  message: {
    type: String,
    required: true,
    min:5,
    max:100
  },
  profession: {
    type: String,
    required: true,
    min:3,
    max:12
  },
  address: {
    type: String, 
    // required: true,
    
  }


  
});

module.exports = mongoose.model("Volenteer", volenteerSchema);
