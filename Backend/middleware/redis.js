const {createClient}=require("redis")
const redisClient = createClient({
    url: process.env.REDIS_URL
})
console.log("REDIS_URL =", process.env.REDIS_URL);

redisClient.on('error', (err) => {
    console.log('Redis Client Error', err);
})
async function connectRedis() {
    await redisClient.connect();
}

connectRedis();
module.exports=redisClient
