const axios = require("axios");
require("dotenv").config();

apiService = async() => {
    console.log("Mocked APIs")
    return Promise.resolve({
        data: {
            count: 17,
            entries: [
                {
                    "API": "AdoptAPet",
                    "Description": "Resource to help get pets adopted",
                    "Auth": "apiKey",
                    "HTTPS": true,
                    "Cors": "yes",
                    "Link": "https://www.adoptapet.com/public/apis/pet_list.html",
                    "Category": "Animals"
                },
                {
                    "API": "Axolotl",
                    "Description": "Collection of axolotl pictures and facts",
                    "Auth": "",
                    "HTTPS": true,
                    "Cors": "no",
                    "Link": "https://theaxolotlapi.netlify.app/",
                    "Category": "Animals"
                },
                {
                    "API": "Cat Facts",
                    "Description": "Daily cat facts",
                    "Auth": "",
                    "HTTPS": true,
                    "Cors": "no",
                    "Link": "https://alexwohlbruck.github.io/cat-facts/",
                    "Category": "Animals"
                },
                {
                    "API": "Cataas",
                    "Description": "Cat as a service (cats pictures and gifs)",
                    "Auth": "",
                    "HTTPS": true,
                    "Cors": "no",
                    "Link": "https://cataas.com/",
                    "Category": "Animals"
                },
                {
                    "API": "Cats",
                    "Description": "Pictures of cats from Tumblr",
                    "Auth": "apiKey",
                    "HTTPS": true,
                    "Cors": "no",
                    "Link": "https://docs.thecatapi.com/",
                    "Category": "Animals"
                },
                {
                    "API": "Dog Facts",
                    "Description": "Random dog facts",
                    "Auth": "",
                    "HTTPS": true,
                    "Cors": "yes",
                    "Link": "https://dukengn.github.io/Dog-facts-API/",
                    "Category": "Animals"
                },
                {
                    "API": "Dog Facts",
                    "Description": "Random facts of Dogs",
                    "Auth": "",
                    "HTTPS": true,
                    "Cors": "yes",
                    "Link": "https://kinduff.github.io/dog-api/",
                    "Category": "Animals"
                },
                {
                    "API": "Dogs",
                    "Description": "Based on the Stanford Dogs Dataset",
                    "Auth": "",
                    "HTTPS": true,
                    "Cors": "yes",
                    "Link": "https://dog.ceo/dog-api/",
                    "Category": "Animals"
                },
                {
                    "API": "eBird",
                    "Description": "Retrieve recent or notable birding observations within a region",
                    "Auth": "apiKey",
                    "HTTPS": true,
                    "Cors": "no",
                    "Link": "https://documenter.getpostman.com/view/664302/S1ENwy59",
                    "Category": "Animals"
                },
                {
                    "API": "FishWatch",
                    "Description": "Information and pictures about individual fish species",
                    "Auth": "",
                    "HTTPS": true,
                    "Cors": "yes",
                    "Link": "https://www.fishwatch.gov/developers",
                    "Category": "Animals"
                },
                {
                    "API": "HTTP Cat",
                    "Description": "Cat for every HTTP Status",
                    "Auth": "",
                    "HTTPS": true,
                    "Cors": "yes",
                    "Link": "https://http.cat/",
                    "Category": "Animals"
                },
                {
                    "API": "HTTP Dog",
                    "Description": "Dogs for every HTTP response status code",
                    "Auth": "",
                    "HTTPS": true,
                    "Cors": "yes",
                    "Link": "https://http.dog/",
                    "Category": "Animals"
                },
                {
                    "API": "IUCN",
                    "Description": "IUCN Red List of Threatened Species",
                    "Auth": "apiKey",
                    "HTTPS": false,
                    "Cors": "no",
                    "Link": "http://apiv3.iucnredlist.org/api/v3/docs",
                    "Category": "Animals"
                },
                {
                    "API": "MeowFacts",
                    "Description": "Get random cat facts",
                    "Auth": "",
                    "HTTPS": true,
                    "Cors": "no",
                    "Link": "https://github.com/wh-iterabb-it/meowfacts",
                    "Category": "Animals"
                },
                {
                    "API": "Movebank",
                    "Description": "Movement and Migration data of animals",
                    "Auth": "",
                    "HTTPS": true,
                    "Cors": "yes",
                    "Link": "https://github.com/movebank/movebank-api-doc",
                    "Category": "Animals"
                },
                {
                    "API": "Petfinder",
                    "Description": "Petfinder is dedicated to helping pets find homes, another resource to get pets adopted",
                    "Auth": "apiKey",
                    "HTTPS": true,
                    "Cors": "yes",
                    "Link": "https://www.petfinder.com/developers/",
                    "Category": "Animals"
                },
                {
                    "API": "PlaceBear",
                    "Description": "Placeholder bear pictures",
                    "Auth": "",
                    "HTTPS": true,
                    "Cors": "yes",
                    "Link": "https://placebear.com/",
                    "Category": "Animals"
                }
            ]
        }
    });
}

apiServiceByTitle = async(title) => {
    console.log("Mocked API by Title")
    return Promise.resolve({
        data: {
            count: 1,
            entries: [
                {
                    "API": "AdoptAPet",
                    "Description": "Resource to help get pets adopted",
                    "Auth": "apiKey",
                    "HTTPS": true,
                    "Cors": "yes",
                    "Link": "https://www.adoptapet.com/public/apis/pet_list.html",
                    "Category": "Animals"
                }
            ]
        }
    });
}

module.exports = { apiService, apiServiceByTitle };