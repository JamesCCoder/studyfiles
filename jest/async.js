const axios = require("axios");

const fetchData = async (id) => {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    return res.data;
}


module.exports = fetchData;