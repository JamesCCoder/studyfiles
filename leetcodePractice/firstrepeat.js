const arr = [1,2,3,2,1];


const repeatElement = (arr) =>{

    
}

console.log(repeatElement(arr));


const repeatFirst = (arr) =>{

    
}

console.log(repeatFirst(arr));

















// const repeatElement = (arr) =>{
//     let myMap = new Map();
//     for(let i = 0; i<arr.length; i++){
//         if(myMap.has(arr[i])){
//             return arr[i];
//         }else{
//             myMap.set(arr[i], 1);
//         }
//     }
//     return -1;
// }

// console.log(repeatElement(arr));


// const repeatFirst = (arr) =>{
//     let index = [];
//    for(let i = 0; i<arr.length; i++){
//        let count = 0;
//        for(let j = 0; j<arr.length; j++){
//            if(arr[i] === arr[j]){
//                count++;
//            }
//        }
//        if(count > 1){
//            index.push(arr[i]);
//        }
//    }
//    return index[0];
// }

// console.log(repeatFirst(arr));