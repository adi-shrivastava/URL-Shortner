const mongoose=require("mongoose");
console.log("MONGO_URL =", process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);
const db=mongoose.connection;
db.on("connected",()=>{
    console.log("MongoDB Sever Connected!!");
})
db.on("error",()=>{
    console.log("MongoDB Server Connection Failed!");
})
db.on("disconnected",()=>{
    console.log("MongoDB Sever Disconnected!");
})
module.exports=mongoose;
