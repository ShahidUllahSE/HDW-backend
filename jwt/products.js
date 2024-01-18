const prodsRoute = require("express").Router();
// const list = require("./list.json");
const Products= require("./models/Products")



prodsRoute.get("/", async (req, res) => {
    try {
        const allProducts = await Products.find({});
        res.json(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  


module.exports=prodsRoute;