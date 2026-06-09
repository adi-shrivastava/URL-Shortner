const Url = require("../models/urlmodel")
const cors=require("cors")
const checkUrlsafety = require("../middleware/safetycheck")
const redisClient = require("../middleware/redis")
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
        console.log(err)
        res.status(500).json({ error: "Internal Server Error" })
    }
}
exports.newurl = async (req, res) => {
    console.time("redirect_lookup")
    const id = req.params.id
    console.log(id)
    const Cachedurl = await redisClient.get(id)
    if (Cachedurl) {
        console.log("Cache Hit")
        console.timeEnd("redirect_lookup")
        return res.redirect(Cachedurl)
        
    }
    console.log("Cache missed")
    const url = await Url.findOne({ short: id })
    if(!url){
        return res.status(404).json({
            error:"short url not found"
        })
    }

    await redisClient.set(id,url.originalUrl)
    console.timeEnd("redirect_lookup")
    return res.redirect(url.originalUrl)
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
exports.benchmark = async (req, res) => {
    const url = await Url.findOne({ short: req.params.id });
    return res.status(200).json({ ok: true });
}
