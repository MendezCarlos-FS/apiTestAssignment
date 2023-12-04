const axios = require("axios");
require("dotenv").config();

apiService = async() => {
    const fullUrl = `${process.env.apiUrl + "/entries"}`;
    return await axios.get(fullUrl);
}

apiServiceByTitle = async(title) => {
    return await axios.get(`${process.env.apiUrl + "/entries?title=" + title}`);
}

module.exports = { apiService, apiServiceByTitle };