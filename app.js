const express= require ("express");

const app = express();

const PORT=3001


app.get("/products" , ( req, res ) => {
    res.send( " List of all products  " )
})

app.post( "/products" , ( req ,res ) => {

    res.send(" add new products ")

} )


app.patch( "/products", ( req , res) => {
 
    res.send(" updating products ");

} )

app.delete( "/products", ( req, res ) => {
 
    res.send( "  prodcuts deleted " )

} )

app.listen(PORT, () =>{
    console.log("running on port " + PORT)
})