//ייצוא אובייקט עם חמש פונקציות עבור כל אחת מהפעולות 
//המטרה שכל הלוגיקה תשב בקובץ הנוכחי

module.exports={

Getallproducts:(req,res)=>{return res.status(200).json({Msg:"all products"})},
Getproductbyid:(req,res)=>{return res.status(200).json({Msg:"get product by id"+req.params.id})},
Addproduct:(req,res)=>{return res.status(200).json({Msg:"add product"})},
Deleteproduct:(req,res)=>{return res.status(200).json({Msg:"delete product by id"+req.params.id})},
Updateproduct:(req,res)=>{return res.status(200).json({Msg:"update product by id"+req.params.id})}


};