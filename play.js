

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


const arr1 = "hello";
const arr2 = "ll";
const arr3 = "llo";

var minPathSum = (arr) => {
   let i = 0;
   let j = arr.length - 1;
   while(i <= j){
     if(arr[i] !== arr[j]){
       return isValid(arr, i + 1, j) || isValid(arr, i, j - 1);
     }
     i++;
     j--;
   }
   return true;
}

const isValid = (arr, m, n) =>{
   while(m <= n){
     if(arr[m] !== arr[n]){
       return false;
     }
     m++;
     n--;
   }
   return true;
}

console.log(minPathSum(arr1));








