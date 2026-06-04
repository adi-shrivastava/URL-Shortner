import { createClient } from 'redis';
const redisClient = createClient({
    url: process.env.REDIS_URL
})
redisClient.on('error', (err) => {
    console.log('Redis Client Error', err);
})
async function connectRedis() {
    await redisClient.connect();
    await redisClient.set("Test", "Hello Redis");
    console.log(await redisClient.get("Test"));
}
connectRedis();
export default connectRedis;
