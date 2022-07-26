const arr = ["a","b","d","c","e","f","b","b"];
const arr1 = "fsdhofhisdf";
const arr2 = [
  {name:"a", age:1},
  {name:"b", age:2},
  {name:"c", age:3},
  {name:"a", age:4},
  {name:"d", age:2},
  {name:"e", age:5},
];




const duplicate = (arr) =>{

}



console.log(duplicate(arr));












/// for the array

// const duplicate = (arr) =>{
//    let myMap = new Map();
//    let res = [];
//    for(let i = 0; i<arr.length; i++){
//        if(myMap.has(arr[i])){
//            myMap.set(arr[i], myMap.get(arr[i])+1);
//        }else{
//            myMap.set(arr[i], 1);
//            res.push(arr[i]);
//        }
//    }
//    return res;
// }



// console.log(duplicate(arr));


/// for string

// const duplicate = (arr) =>{
//    let res = "";
//    let myMap = new Map();
//    for(let i = 0; i<arr.length; i++){
//         if(myMap.has(arr[i])){
//             myMap.set(arr[i], myMap.get(arr[i])+1);
//         }else{
//             myMap.set(arr[i], 1);
//             res += arr[i];
//         }
//    }
//    return res;
// }



// console.log(duplicate(arr1));


/// for obj

// const duplicate = (arr) =>{

//     let name = [];
//     let age = [];
//     let res = [];

//     for(let one of arr){
//         if(name.indexOf(one["name"]) == -1 && age.indexOf(one["age"]) == -1){
//             name.push(one["name"]);
//             age.push(one["age"]);
//             res.push(one);
//         }
//     }
//     return res;
// }

// console.log(duplicate(arr2));