const cartRoute= require("express").Router();

cartRoute.get('/' , ( req, res ) => {

    res.send( " complete cart " ) 

})

cartRoute.post("/" , ( req , res ) => {
    res.send( " added to cart " )
})

cartRoute.patch("/" , ( req , res ) => {

    res.send( " cart updated " )
})

cartRoute.delete("/" , ( req, res ) => {
    res.send(" deleted from cart ")
} )

module.exports = cartRoute