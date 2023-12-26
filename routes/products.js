const prodsRoute = require("express").Router



prodsRoute.get("/products" , ( req, res ) => {
res.send( " List of all products  " )
})

prodsRoute.post( "/products" , ( req ,res ) => {

    res.send(" add new products ")

} )


prodsRoute.patch( "/products", ( req , res) => {
 
    res.send(" updating products ");

} )

prodsRoute.delete( "/products", ( req, res ) => {
 
    res.send( "  prodcuts deleted " )

} )

module.exports=prodsRoute;