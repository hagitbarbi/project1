
//כאן יהיה כל הראוטינג של הפרודאקט את כל אלו לקחנו מהאפ

//נגדיר אובייקט מסוג ראוטר
const router=require("express").Router();
//מכיל את 5 הפונקציות עם הלוגיקה של הקונטרולרס
const productcontroller=require("../controllers/product");
const {Addproduct,Getallproducts,Getproductbyid,Updateproduct,Deleteproduct}=require("../controllers/product");


//הגדרנו ניתוב - נקודת קצה בשיטת גט לנתיב של מוצר
router.get("/",Getallproducts);
//שליפת מוצר לפי קוד מוצר
router.get("/:id",Getproductbyid);
//עדכון מוצר לפי קוד מוצר
router.put("/:id",Updateproduct);
//הוספת מוצר חדש 
router.post("/",Addproduct);
//מחיקת מוצר לפי קוד מוצר
router.delete("/:id",Deleteproduct);

module.exports=router;