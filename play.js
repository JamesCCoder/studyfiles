

let result = [{"text":"55 法务类","value":"55"},
              {"text":"63 成本类","value":"63"},
              {"text":"63 成本类","value":"61"},
              {"text":"64 财务类","value":"61"},
              {"text":"67 战投类","value":"61"}]



const num1 = 123;
const num2 = -123;

const arr = [7,6,4,3,1,2,3,4];
const str = "fdsfihsdhf";
const obj = [
  {name:"a", age:1},
  {name:"b", age:2},
  {name:"c", age:3},
  {name:"a", age:4},
  {name:"d", age:2},
  {name:"e", age:5},
];

var minPathSum = (arr) => {
  let res = [];
  let name = [];
  let age = [];
  for(let one of arr){
     if(name.indexOf(one["name"]) == -1 && age.indexOf(one["age"]) == -1){
       name.push(one["name"]);
       age.push(one["age"]);
       res.push(one);
     }
   }
   return res;
}

console.log(minPathSum(obj));








