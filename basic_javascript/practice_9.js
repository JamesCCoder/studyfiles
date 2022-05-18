// object method

const person = {
    name: "John",
    age: 21,
    sex: "male",
    
    getAge: function(){                    //no arrow function
      return this.age;
    },
    getName: function(){
      return `His name is ${this.name}`;
    },
    getName_1: function(){
      return "His name is " + this.name;
    }
}

console.log(person.getAge());
console.log(person.getName());
console.log(person.getName_1());