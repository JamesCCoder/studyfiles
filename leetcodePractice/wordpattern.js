const arr1 = "abba";
const arr2 = "cat dog dog cat";
const arr3 = "cat dog dog kitty";


const pattern = (arr1, arr2) =>{

}

console.log(pattern(arr1, arr2));

























// const pattern = (arr1, arr2) =>{
//    let myMap = new Map();
//    arr1 = arr1.split("");
//    arr2 = arr2.split(" ");
//    for(let i = 0; i<arr1.length; i++){
//       if(myMap.has(arr1[i])){
//           if(myMap.get(arr1[i]) !== arr2[i]){
//               return false;
//           }
//       }
//       myMap.set(arr1[i], arr2[i]);
//    }
//    return true;
// }

// console.log(pattern(arr1, arr2));
// console.log(pattern(arr1, arr3));