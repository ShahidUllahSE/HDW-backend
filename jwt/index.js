const express = require ('express');
const mongoose = require ("mongoose"); 

const userRoute = require ('../newroutes/user')



const app = express();

const PORT = 3001;

mongoose.connect("mongodb+srv://engrshahidullah:shah.nov19@cluster1.mor2uic.mongodb.net/?retryWrites=true&w=majority")
 
app.use(express.json());

app.use("/api/user/", userRoute)

app.get("/", ( req, res ) => {

})





app.listen( PORT , () => console.log(`running on port ${PORT}`) )



