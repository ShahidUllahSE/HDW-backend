const express = require("express");
const mysql = require("mysql")

const app = express()

const PORT=3001

const connection= mysql.createConnection({
    host: 'localhost', // or 127.0.0.1
    user: 'root',
    password: "",
    database : "ecommerce" 
})

connection.connect((err)=>{
 if (err)   
 console.log(err)
else
console.log("database connection established")
})


app.use(express.json());


app.get("/users" , ( req, res ) => {

    // const sql = "SELECT * FROM users"
    // const sql = "SELECT * FROM products LIMIT 2"
    
    // fields mean if we want to return some value from some specific field but in this case we are returning all so not using fields
    connection.query(sql, ( err, results, fields ) => {
        if(err) return; // gaurd close means if error get returned from here , we wil not go down
        res.send(results)

         
    })


})

app.post("/users", ( req , res ) => {

})

app.patch("/users" , ( req , res ) => {


})

app.delete("/users" , ( req , res ) => {

})

app.listen(PORT, () => {console.log("API is running on port"+PORT)})