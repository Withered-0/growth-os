const axios = require("axios");

async function runWebsiteAudit(url){

    const response = await axios.post(
        process.env.N8N_WEBHOOK,
        {
            url
        }
    );

    return response.data;

}

module.exports = {
    runWebsiteAudit
};