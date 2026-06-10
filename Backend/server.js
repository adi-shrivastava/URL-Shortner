const cors=require('cors')
const express=require('express');
const db=require('./db');
require("dotenv").config();
const routes=require('./routes/urlroutes');
const port=5000;
const logrequest=(req,res,next)=>{
    console.log(`${req.method} ${req.url} ${new Date().toString()}`);
    next();
}

const app=express();
app.set("trust proxy", 1);
app.use(cors());
app.use(express.json());
app.use(logrequest);
app.use("/",routes);
app.listen(5000,()=>{
    console.log(`Server is running on port ${port}`);
})