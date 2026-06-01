const express=require('express');
const db=require('./db');
const routes=require('./routes/urlroutes');
const port=3000;
const logrequest=(req,res,next)=>{
    console.log(`${req.method} ${req.url} ${new Date().toString()}`);
    next();
}

const app=express()
app.use(express.json());
app.use(logrequest);
app.use("/",routes);
app.listen(3000,()=>{
    console.log(`Server is running on port ${port}`);
})