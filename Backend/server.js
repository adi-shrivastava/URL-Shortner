const express=require('express');
const db=require('./db');
port=3000;
const app=express()
app.get("/",(req,res)=>{
    res.send("Welcome to URL shortner Homepage YESS!!!");
})
app.listen(3000,()=>{
    console.log(`Sever is running on port ${port}`);
})