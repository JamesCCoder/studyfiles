let str1 = "world";
let str2 = "abba";
let str3 = "dddd";
let str4 = "cycle";

const splitting = (str) =>{
   const arr = str.split("");
   let res = 1;
   let mySet = new Set();
   for(let i = 0; i<arr.length; i++){
       if(mySet.has(arr[i])){
           res++;
           mySet.clear();
       }
       mySet.add(arr[i]);
   }
   return res;
}

console.log(splitting(str1));
console.log(splitting(str2));
console.log(splitting(str3));
console.log(splitting(str4));