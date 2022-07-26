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



























/// for array

// const duplicate = (arr) =>{
//     let index = [];
//     for(let i = 0; i<arr.length; i++){
//         let count = 0;
//         for(let j = 0; j<arr.length; j++){
//            if(arr[i] === arr[j]){
//                count++;
//            }
//         }
//         if(count > 1){
//             index.push(i);
//         }
//     }
//     let num = 0;
//     for(let i = 0; i<index.length; i++){
//         arr.splice(index[i] - num, 1);
//         num++;
//     }
//     return arr;
// }

// console.log(duplicate(arr));


/// for string

// const duplicate = (arr) =>{
//    let index = [];
//    for(let i = 0; i<arr.length; i++){
//        let count = 0;
//        for(let j = 0; j<arr.length; j++){
//            if(arr[i] === arr[j]){
//                count++;
//            }
//        }
//        if(count > 1){
//           index.push(i);
//        }
//    }
//    arr = arr.split("");
//    let num = 0;
//    for(let i = 0; i<index.length; i++){
//        arr.splice(index[i] - num, 1);
//        num++;
//    }
//    return arr.join("");
// }

// console.log(duplicate(arr1));


///for obj

// const duplicate = (arr) =>{
//     let index = [];
//     for(let i = 0; i<arr.length; i++){
//         let count = 0;
//         for(let j = 0; j<arr.length; j++){
//             if(arr[i].name === arr[j].name || arr[i].age === arr[j].age){
//                 count++;
//             }
//         }
//         if(count > 1){
//             index.push(i);
//         }
//     }
//     let num = 0;
//     for(let i = 0; i<index.length; i++){
//         arr.splice(index[i] - num, 1);
//         num++;
//     }
//     return arr;
// }

// console.log(duplicate(arr2));