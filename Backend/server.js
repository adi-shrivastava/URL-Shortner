const cors=require('cors')
const express=require('express');
const db=require('./db');
require("dotenv").config();
const routes=require('./routes/urlroutes');
const port=3000;
const logrequest=(req,res,next)=>{
    console.log(`${req.method} ${req.url} ${new Date().toString()}`);
    next();
}

const app=express();
app.get("/", (req, res) => {
    console.log("Root route hit");
    res.send("Server Working");
});
app.use((req,res,next)=>{
    console.log("CORS middleware hit");
    next();
});
app.use(cors());
app.use(express.json());
app.use(logrequest);
app.use("/",routes);
app.listen(3000,()=>{
    console.log(`Server is running on port ${port}`);
})