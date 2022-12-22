const express=require("express");
const app=express();
const morgan=require("morgan");
//הוספרת שכבת ביניים של מורגן שמתעדת כל פניה לשרת בקונסול 
app.use(morgan("dev"));
//app.use(function(req,res,next){
  //  console.log("my middleware "+req.socket.remoteAddress);
  //  next();
//});
app.use(express.json());

const mysql=require('mysql');
const connection = mysql.createConnection({
host:'localhost',
user:'hagit',
password:'Aa0604Aa$',
database:'ecomdb'
});


connection.connect(function(err){//חיבור 9לבסיס הנתונים
    if(err)//במידה והייתה שגיאה אז ייכנס למשתנה הזה פירוט של השגיאה 
    console.log('Eror'+err.message);
    else//במידה ולא הייתה שגיאה מדפיסים הודעה
    console.log('connected to db');
})
global.mysqldb=connection;

const auth=require("./api/v1/midlewares/auth");

//  app.use(auth);
  

const productrouter=require("./api/v1/routes/product");
//הוספת שכבה של ניתוב עבור מוצרים 
app.use("/product",productrouter);





module.exports=app;