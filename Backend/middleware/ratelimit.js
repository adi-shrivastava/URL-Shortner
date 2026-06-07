const { RedisClient } = require("redis")
async function rateLimit(req,res,next){
    try{
        const ip=req.ip
        const currentTime=Date.now()
        const reqcount=await RedisClient.incr(ip)
        if(reqcount===1){
            await RedisClient.expire(ip,60)
        }
        if(reqcount>100){
            return res.status(429).json({error:"Too many requests."})
        }
    }
    catch(err){
        console.error("Error in rate limiting middleware:",err);
        res.status(500).json({error:"Internal Server Error"})
    }
}
module.exports=rateLimit
