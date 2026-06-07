const { RedisClient } = require("redis")
async function rateLimit(req,res,next){
    try{
        const ip=req.ip
        const currentTime=Date.now()
        const reqcount=await RedisClient.incr(ip)
        if(reqcount===1){
            await RedisClient.expire(ip,60)
        }
        
        }
    catch(err){
        console.error("Error in rate limiting middleware:",err);
    }
}
module.exports=rateLimit
