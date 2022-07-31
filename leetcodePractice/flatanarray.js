const arr = [1,2,3,4,5,[6,4,3,[2,3]]];

const flat = (arr) =>{

}

console.log(flat(arr));


const flat = (arr, n) =>{

}

console.log(flat(arr), 2);































// const flat = (arr, n) =>{
//     if(n <= 0){
//         return arr;
//     }
    
//     let res = [];
//     for(let i = 0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             res.push(...flat(arr[i], n - 1));
//         }else{
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }


// console.log(flat(arr, 1));