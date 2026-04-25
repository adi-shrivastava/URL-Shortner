const mongoose=require("mongoose");
const MongoURL="mongodb://localhost:27017/urlshortnerdb";
mongoose.connect(MongoURL);
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
