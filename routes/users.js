const userRoute= require("express").Router();

userRoute.get("/" , ( req, res )=> {
    res.send(" user list ")

})


userRoute.post("/", ( req, res) => {

    res.send(" user added ")
})

userRoute.patch("/" , ( req, res ) => {
    res.send (" user uptaing ... ")

})

userRoute.delete("/" , ( req, res ) => {
    res.send(" user deleted ")
})

module.exports = userRoute;