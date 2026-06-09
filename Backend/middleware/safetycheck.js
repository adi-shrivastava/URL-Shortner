const axios = require("axios")
require('dotenv').config()
const key = (process.env.GOOGLE_SAFETY_API_KEY)
// const controller=require('./../controller/urlcontroller')
async function checkUrlsafety(url) {
    try {
        const response = await axios.post(`https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${key}`, {
            client: {
                clientId: "urlshortner",
                clientVersion: "1.0"
            },
            threatInfo: {
                threatTypes: [
                    "MALWARE",
                    "SOCIAL_ENGINEERING",
                    "UNWANTED_SOFTWARE"
                ],
                platformTypes: [
                    "ANY_PLATFORM"
                ],
                threatEntryTypes: [
                    "URL"
                ],
                threatEntries: [
                    {
                        url: url
                    }
                ]
            }
        });
        return response.data;
    } 
    catch(err) {
        console.log(err)
        throw err;
    }
}
module.exports = checkUrlsafety