const express=require("express");
const app=express();

const productrouter=require("./api/v1/routes/product");
app.use("/product",productrouter);

//


module.exports=app;