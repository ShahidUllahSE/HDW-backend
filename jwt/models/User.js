const mongoose = require("mongoose");

// database validation or backend validation and just done before saving database

const userSchema = new mongoose.Schema({

    name: {

        type: String,
        min: 3,
        max: 8,
        required: true
    },

    email: {

        type: String,
        min: 5,
        max: 15,
        required: true

    },

    password: {

        type: String,
        min: 8,
        max:15,
        required : true



    },


    adress: {

        type: String,
        min: 1,
        max: 10,
        required: false


    },

    date: {

        type: Date,
        default: Date.now()

    },



})


module.exports = mongoose.model("User", userSchema)
// made model based on Schema and exported simply this means 



