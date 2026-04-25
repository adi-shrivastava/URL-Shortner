const mongoose=require('mongoose');
const UrlSchema=new mongoose.Schema({
    short:{
        type:String,
        required:true,
        unique:true
    },
    originalUrl:{
        type:String,
        required:true
    }
})
const Url=mongoose.model('Url',UrlSchema)
module.exports=Url