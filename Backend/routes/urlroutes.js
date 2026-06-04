const express=require('express')
const {generateShortUrl,newurl,stats}=require('./../controller/urlcontroller')
const router=express.Router()
router.get("/",(req,res)=>{
    res.send("Welcome to URL shortner Homepage YESS!!!");
})
router.post("/shorten",generateShortUrl)
router.get("/benchmark/:id", (req, res) => {
    res.status(200).json({ ok: true });
});
router.get("/:id",newurl)
router.get("/stats/:id",stats)

module.exports=router