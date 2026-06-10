const redisClient=require("../middleware/redis")
async function rateLimit(req,res,next){
    try{
        const ip=req.ip
        console.log("IP",ip)
        const currentTime=Date.now()
        const reqcount=await redisClient.incr(ip)
        console.log(reqcount)
        if(reqcount===1){
            await redisClient.expire(ip,60)
        }
        if(reqcount>100){
            return res.status(429).json({error:"Too many requests."})
        }
        next();
    }
    catch(err){
        console.error("Error in rate limiting middleware:",err);
        res.status(500).json({error:"Internal Server Error"})
    }
}
module.exports=rateLimit
