const express=require('express')
const ratelimit1=require("../middleware/ratelimit")
const {generateShortUrl,newurl,stats,analytics}=require('./../controller/urlcontroller')
console.log(ratelimit1)
const router=express.Router()
router.get("/",analytics,(req,res)=>{
    res.send("Welcome to URL shortner Homepage YESS!!!");
})
router.post("/shorten",ratelimit1,generateShortUrl)
router.get("/benchmark/:id",ratelimit1, (req, res) => {
    res.status(200).json({ ok: true });
});
router.get("/:id",ratelimit1,newurl)
router.get("/stats/:id",ratelimit1,stats)

module.exports=router