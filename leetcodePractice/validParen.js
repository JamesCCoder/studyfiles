const arr1 = "(){}[]";
const arr2 = "({[]})";
const arr3 = "}{";
const arr4 = "({[})]";


const valid = (arr) =>{
  
    
}

console.log(valid(arr1));
console.log(valid(arr2));
console.log(valid(arr3));
console.log(valid(arr4));



















// const valid = (arr) =>{
//   let res = [];
//   for(let i of arr){
//       if(i === "("){
//           res.push(")");
//       }else if(i === "["){
//           res.push("]");
//       }else if(i === "{"){
//           res.push("}");
//       }else if(res.pop() !== i){
//           return false;
//       }
//   }
//   return res.length === 0;
// }

// console.log(valid(arr1));
// console.log(valid(arr2));
// console.log(valid(arr3));
// console.log(valid(arr4));