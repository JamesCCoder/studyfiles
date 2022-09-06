

































// arr = [1,2,3,[[4,5], 6,7]]; 

// let myFlat = (arr) =>{
//    let res = [];
//    for(let i = 0; i<arr.length; i++){
//        if(Array.isArray(arr[i])){
//            res = res.concat(flat(arr[i]));
//        }else{
//            res = res.concat(arr[i]);
//        }
//    }
//    return res;
// }

// console.log(myFlat(arr));

// let myFlat1 = (arr, n) =>{
//     if(n <= 0){
//        return arr;
//     }
//     let res = [];
//     for(let i = 0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             res = res.concat(myFlat1(arr[i], n - 1));
//         }else{
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }

// console.log(myFlat1(arr, 1));

// const myFlat2 = (arr) =>{
//     return arr.reduce((pre, cur) =>{
//         return pre.concat(Array.isArray(cur) ? myFlat2(cur) : cur);
//     }, [])
// }

// console.log(myFlat2(arr));

// const myFlat3 = (arr, n) =>{
//     if(n <= 0){
//         return arr;
//     }
//     return arr.reduce((pre, cur) =>{
//         return pre.concat(Array.isArray(cur) ? myFlat3(cur, n - 1) : cur);
//     }, [])
// }

// console.log(myFlat3(arr, 1));