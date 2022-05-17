const {people} = require("./data.js");

const newPeople = people.map((person) => {
    const {id, name} = person;
    return{id, name};
     
})

console.log(newPeople);  