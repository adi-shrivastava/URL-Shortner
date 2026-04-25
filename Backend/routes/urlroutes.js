const express=require('express')
const {generateShortUrl,newurl}=require('./../controller/urlcontroller')
const router=express.Router()
router.get("/",(req,res)=>{
    res.send("Welcome to URL shortner Homepage YESS!!!");
})
router.post("/shorten",generateShortUrl)
router.get("/:id",newurl)
module.exports=router