const arr = [1,2,3,4,5];






























// const arr =[1,2,3,4,5,6];

// Array.prototype.myFilter = (myFunc) => {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     const result = myFunc(arr[i], arr, i);
//     if (result) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// };

// console.log(arr.myFilter((x) => x % 2 === 0));


// Array.prototype.myFilter = (callback) =>{
//     let res = [];
//     for(let i = 0; i<arr.length; i++){
//         if(callback(arr[i])){
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }

// const callback = (x) =>{
//     return x % 2 === 0;
// }

// console.log(arr.myFilter(callback));