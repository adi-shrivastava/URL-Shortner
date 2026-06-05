const redis=require("./middleware/redis")
async function rateLimit(req,res,next){
    try{
        const ip=req.ip
        const currentTime=Date.now()
        const requestCount=await redis.get(ip)
        if(requestCount){
        }
    }
}