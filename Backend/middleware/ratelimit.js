const { RedisClient } = require("redis")
async function rateLimit(req,res,next){
    try{
        const ip=req.ip
        const currentTime=Date.now()

        }
    catch(err){
        console.error("Error in rate limiting middleware:",err);
    }
}
module.exports=rateLimit
