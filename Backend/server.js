const express=require('express')
port=3000
const app=express()
app.get("/",(req,res)=>{
    console.log("HELLO FROM SERVER!")
})
app.listen(3000,()=>{
    console.log(`Sever is running on port ${port}`)
})