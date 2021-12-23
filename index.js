const request = require("request");
const fs = require('fs').promises;
const axios = require('axios').default;
async function getConnection(){
    const response = await axios.get("https://api.covid19api.com/countries");
    console.log("successfuly retrieved the countries list");
    let str='';
    response.data.forEach(country => {
        str+=`${country['Country']},${country['Slug']},${country["ISO2"]}\n`
    });
    await fs.writeFile('countries.csv',str)
    console.log("Data hase been saved......")
}
getConnection()