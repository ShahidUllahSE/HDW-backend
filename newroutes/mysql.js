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
// getting all data from user table

    // const sql = "SELECT * FROM products LIMIT 2"
    // getting data of 2 records only
 

    // const sql = `SELECT * FROM products LIMIT ${req.query.limit}`
    // getting limit but from user in parameters

    // const sql = `SELECT * FROM products ORDER BY pid DESC`
    // using sort here

    // const sql = `SELECT * FROM products ORDER BY pid ${req.query.sort}`

    // want to get a specific product

    const sql = `SELECT * FROM products WHERE pid=${req.query.pid}`


})

app.post("/users", ( req , res ) => {

    const sql = `INSERT INTO users (uid, name, email, password) VALUES (NULL, '${req.body.name}', '${req.body.email}', '${req.body.password}');`

    res.send(sql)
    
        
        // fields mean if we want to return some value from some specific field but in this case we are returning all so not using fields
        connection.query(sql, ( err, results, fields ) => {
            if(err) return; // gaurd close means if error get returned from here , we wil not go down
            res.send(results.insertId+"")// id need to be in sting therefore i added +"" // as once we register on gmail and then it directly logged in us in account so it means that its retutrning id so on basis of  that we are logging in to that.
    
             
        })
})

app.patch("/users" , ( req , res ) => {


})

app.delete("/users" , ( req , res ) => {


    const sql = `DELETE FROM users WHERE uid=${ req.body.uid }`
    connection.query(sql, ( err, results, fields ) => {
        if(err) return
        res.send(results)
    })

})

app.listen(PORT, () => {console.log("API is running on port"+PORT)})