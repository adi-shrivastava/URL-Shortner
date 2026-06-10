const express=require('express')
const ratelimit1=require("../middleware/ratelimit")
const {generateShortUrl,newurl,stats}=require('./../controller/urlcontroller')
console.log(ratelimit1)
const router=express.Router()
router.get("/",(req,res)=>{
    res.send("Welcome to URL shortner Homepage YESS!!!");
})
router.post("/shorten",generateShortUrl)
router.get("/benchmark/:id", (req, res) => {
    res.status(200).json({ ok: true });
});
router.get("/:id",newurl)
router.get("/stats/:id",ratelimit1,stats)

module.exports=router