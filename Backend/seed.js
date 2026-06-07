const mongoose=require('mongoose')
const Url=require('./models/urlmodel')
async function seed(){
    try{
        await mongoose.connect("mongodb://localhost:27017/urlshortnerdb")
        const urls=[]
        for(let i=0; i<10000; i++){
            urls.push({originalUrl:'https://example.com/'+i,
                short:Math.random().toString(36).substring(2,8),
                clicks:Math.floor(Math.random()*100)})
        }
        await Url.insertMany(urls);
        console.log("Database seeded successfully!")
        mongoose.connection.close()
    }
    catch(err){
        console.error("Error seeding database:", err)
    }
}
async function checkIndexes(){
    try{
        await mongoose.connect("mongodb://localhost:27017/urlshortnerdb")
        const indexes=await Url.collection.getIndexes()
        console.log("Indexes:", indexes)
        mongoose.connection.close()
    }
    catch(err){
        console.error("Error checking indexes:", err)
    }
}
async function countDocuments(){
    try{
        await mongoose.connect("mongodb://localhost:27017/urlshortnerdb")
        const count=await Url.countDocuments()
        console.log("Total documents in Url collection:", count)
        mongoose.connection.close()
    }
    catch(err){
        console.error("Error counting documents:", err)
    }
}
async function test() {
    await mongoose.connect("mongodb://localhost:27017/urlshortnerdb");

    const doc = await Url.findOne();

    console.log("Testing short:", doc.short);

    const result = await Url.collection.find(
        { short: doc.short }
    ).explain("executionStats");

    console.log(JSON.stringify(result.executionStats, null, 2));

    process.exit();
}
test();