//הפעלת פונקציה מתוך ספריית אי אן וי שטוענת את ההגדרות מקובץ דוט אי אן וי 
require("dotenv").config();
//function SendEmail(u,p)
//{
    //הזן שם משתמש וסיסמה 
//}
//SendEmail(process.env.USER_EMAIL,prosses.env.EMAIL_PASS)
const http=require("http");
const app=require("./app");
const port=5353;
const srv=http.createServer(app);
srv.listen(port,()=>{console.log("server up")});