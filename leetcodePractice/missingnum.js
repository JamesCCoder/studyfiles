const arr1 = [1,2,3,4];
const arr2 = [0,1,2,4];
const arr3 = [0,1,2,3];


const arr4 = [-1, 0, -2,1,2];


const miss = (arr) =>{

    

}

console.log(miss(arr1));
console.log(miss(arr2));
console.log(miss(arr3));


const missneg = (arr) =>{

    
}


console.log(missneg(arr4));











// const miss = (arr) =>{
//     arr.sort((a, b) => a - b);
//     if(arr[0] !== 0) return 0;
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] !== i){
//             return i;
//         }
//     }
//     return arr.length;
// }

// console.log(miss(arr1));
// console.log(miss(arr2));
// console.log(miss(arr3));


// const missneg = (arr) =>{
//    arr.sort((a, b) => a - b);
//    for(let i = 0; i<arr.length; i++){
//        if(arr[i] >= 0){
//            arr.splice(0, i);
//        }
//    }
//     if(arr[0] !== 0) return 0;
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] !== i){
//             return i;
//         }
//     }
//     return arr.length;
// }


// console.log(missneg(arr4));