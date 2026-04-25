const Url = require("../models/urlmodel")

exports.generateShortUrl=(req,res)=>{
    try{
        const{url}=req.body
        if(!url){
            return res.status(400).json({error:"URL is required"})
        }
        const shortUrl=Math.random().toString(36).substring(2,8)
        res.status(200).json({shortUrl})
        const saveurl=new Url({originalUrl:url,short: shortUrl})
        
        saveurl.save()
        
    }
    catch(err){
        res.status(500).json({error:"Internal Server Error"})
    }
}
exports.newurl=async(req,res)=>{
    const id=req.params.id
    console.log(id)
    const url=await Url.findOne({short:id})
   
    if(url){
        res.redirect(url.originalUrl)
        res.status(200).json({message:"Redirecting to URL"})
    }
    else{
        res.status(404).json({error:"URL not found"})
    }
}