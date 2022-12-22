//ייצוא אובייקט עם חמש פונקציות עבור כל אחת מהפעולות 
//המטרה שכל הלוגיקה תשב בקובץ הנוכחי
const connection=global.mysqldb;
module.exports={
Getallproducts:(req,res)=>{
 connection.query("select * from t_products",function(err,rows,fields){
    if(err)
    {
        console.log(err.message);
        return res.status(500).json({msg:err.message});

    }
    else
    {
    console.log("ok");
    return res.status(200).json(rows);
    }


 });
},
    
Getproductbyid:(req,res)=>{
    connection.query("select * from t_products where pid="+req.params.id,function(err,rows,fields){
        if(err)
        {
            console.log(err.message);
            return res.status(500).json({msg:err.message});
    
        }
        else
        {
        console.log("ok");
        return res.status(200).json(rows);
        }
    
    
     });
   },

Addproduct:(req,res)=>{
    const {pname,price,pdesc,picname}=req.body;
    connection.query("INSERT INTO t_products (pname,price,pdesc,picname) VALUES " + ({pname,price,pdesc,picname}),function(err,rows,fields){
        if(err)
        {
           console.log(err.message);
            return res.status(500).json({msg:err.message});
    
        }
        else
        {
         console.log("ok");
        return res.status(200).json(req.body);
       }
    
    
     });
   },

Deleteproduct:(req,res)=>{
    connection.query("DELETE FROM t_products where pid="+req.params.id,function(err,rows,fields){
    if(err)
    {
        console.log(err.message);
        return res.status(500).json({msg:err.message});

    }
    else
    {
    console.log("ok");
    return res.status(200).json(rows);
    }


 });
},
    
Updateproduct:(req,res)=>{return res.status(200).json({Msg:"update product by id"+req.params.id})}



};