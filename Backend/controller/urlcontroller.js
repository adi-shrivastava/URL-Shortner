const Url = require("../models/urlmodel")
const checkUrlsafety = require("../middleware/safetycheck")
console.log(checkUrlsafety)
exports.generateShortUrl = async (req, res) => {
    try {
        const { url } = req.body
        // console.log(url)
        if (!url) {
            return res.status(400).json({ error: "URL is required" })
        }
        const response = await checkUrlsafety(url)
        if (response.matches) { //matches condition by GOOGLE SAFETY CHECK API (DANGEROUS URL)
            return res.status(400).json({ error: "URL is unsafe" })
        }
        
        console.log("URL is safe")
        
        const existingurl = await Url.findOne({ originalUrl: url })
        if (existingurl) {
            existingurl.clicks += 1
            await existingurl.save()
            return res.status(200).json({ shortUrl: existingurl.short })
        }
        const shortUrl = Math.random().toString(36).substring(2, 8)
        res.status(200).json({ shortUrl })
        const saveurl = new Url({ originalUrl: url, short: shortUrl })
        //save command
        await saveurl.save()
    }
    catch (err) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
exports.newurl = async (req, res) => {
    console.time("redirect_lookup")
    const id = req.params.id
    console.log(id)
    const url = await Url.findOne({ short: id })
    console.timeEnd("redirect_lookup")
    if (url) {
        res.redirect(url.originalUrl)
        // res.status(200).json({ message: "Redirecting to URL" })
    }
    else {
        res.status(404).json({ error: "URL not found" })
    }
}
exports.stats = async (req, res) => {
    const shortid = req.params.id
    const existingurl = await Url.findOne({ short: shortid })
    if (existingurl) {
        res.status(200).json({ clicks: existingurl.clicks, originalUrl: existingurl.originalUrl, shortUrl: existingurl.short })
    }
    else {
        res.status(404).json({ error: "Url not found" })
    }
}
exports.benchmark=async(req,res)=>{
    const url=await Url.findOne({short:req.params.id});
    return res.status(200).json({ok:true});
}