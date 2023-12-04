const axios = require("axios");
require("dotenv").config();

apiService = async() => {
    console.log("Real APIs")
    return await axios.get(`${process.env.apiUrl + "/entries"}`);
}

apiServiceByTitle = async(title) => {
    console.log("Real API by Title")
    return await axios.get(`${process.env.apiUrl + "/entries?title=" + title}`);
}

module.exports = { apiService, apiServiceByTitle };