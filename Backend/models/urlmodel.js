const mongoose=require('mongoose');
const UrlSchema=new mongoose.Schema({
    short:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    originalUrl:{
        type:String,
        required:true,  
    },
    clicks:{
        type:Number,
        default:0
    }
})
const Url=mongoose.model('Url',UrlSchema)
module.exports=Url