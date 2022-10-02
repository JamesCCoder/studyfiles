let axios = require("axios"); 

const sum = async() =>{
   const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
   const formatData = await data.data;
   let res = [];
   for(let i = 0; i<formatData.length; i++){
       res.push(formatData[i].title);
   }
   return res;
}

module.exports = sum;