const authfunc=(function(req,res,next){
    let iparr=["::1","::4","::7","::13","::200"];
    const  numip=req.socket.remoteAddress;
    for (let i = 0; i < iparr.length; i++)
     {

        if (iparr[i]==numip)
    {
            console.log("my middleware "+numip);
             next();
    }
      }
      return res.status(400).json({Msg:"you do not have authorization"});
  
  });
  module.exports=authfunc;
  