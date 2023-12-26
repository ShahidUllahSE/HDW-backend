const prodsRoute = require("express").Router();



prodsRoute.get("/" , ( req, res ) => {
res.send( " List of all products  " )
})

prodsRoute.post( "/" , ( req ,res ) => {

    res.send(" add new products ")

} )


prodsRoute.patch( "/", ( req , res) => {
 
    res.send(" updating products ");

} )

prodsRoute.delete( "/", ( req, res ) => {
 
    res.send( "  prodcuts deleted " )

} )

module.exports=prodsRoute;