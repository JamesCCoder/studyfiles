//1. two sum

// nums = [3,2,4], target = 6

// const two = (nums,target) => {
//   let res = [];
//   let myMap = new Map();
//   for(let i = 0; i<nums.length; i++){
//     if(myMap.has(target-nums[i])){
//         res[0] = myMap.get(target-nums[i]);
//         res[1] = i;
//     }  
//     myMap.set(nums[i], i);
//   }
//   return res;
// }

// console.log(two(nums, target));

//2. longest substring without repeating characters

// str = "abcabcbb";

// const long = (str) =>{
//     let mySet = new Set();
//     let sum = 0;
//     let max = 1;
//     for(let i = 0; i<str.length; i++){
//         sum = 1;
//         mySet.add(str[i]);
//         for(let j = i+1;j<str.length; j++){
//            if(mySet.has(str[j])){
//                mySet.clear();
//                break;
//            }else{
//                mySet.add(str[j]);
//                sum++;
//                if(sum > max) max = sum;
//            }
            
//         }
//     }
//     return max;
// }

// console.log(long(str));

//3.longest palindromic substring

// str = "ac";

// const long = (str) =>{
//   let max = -1;
//   let res = "";
//   for(let i = 0; i<str.length; i++){
//       for(let j = i; j<str.length; j++){
//           if(palin(str.substring(i,j+1))){
//               if(j - i + 1 > max){
//                   max = j - i + 1;
//                   res = str.substring(i, j+1);
//               }
//           }
//       }
//   }
//   return res;
// }



// const palin = (str) =>{
//     let a = 0;
//     let b = str.length - 1;
//     let n = Math.floor(str.length / 2);
//     while(a <= n){
//         if(str[a] !== str[b]){
//             return false;
//         }
//         a++;
//         b--;
//     }
//     return true;
// }

// console.log(long(str));

//4. reverse integer

// num = -123;

// const reverse = (num) =>{
//     let sign = 0;
//     if(num < 0) {
//         num = -num;
//         sign = 1;
//     }
//     let res = "";
//     let n = num.toString();
//     for(let i of n){
//         res = i + res;
//     }
//     return sign === 0 ? Number(res) : (-1) * Number(res);
// }

// console.log(reverse(num));

//5. container with most water

// height = [5,1,2,4];

// let mx = (height) => {
//   let maxarea = 0;
//   let a = 0;
//   let b = height.length-1;
//   while(a<b){
//     maxarea = Math.max(maxarea, Math.min(height[a], height[b]) * (b-a));
//     if(height[a] < height[b]){
//       a++;
//     }else{
//       b--;
//     }
//   }
//   return maxarea;
// };

// console.log(mx(height));

//6. longest common prefix

// arr = ["flooooooooo","floor","flow"];

// const common = (arr) =>{
//    for(let i = 0; i<arr[0].length; i++){
//      for(let s of arr){
//        if(s[i] !== arr[0][i]){
//          return s.substring(0, i);
//        }
//      }
//    }
//    return arr[0];
// }

// console.log(common(arr));

//7. remove dumplicate in an array

// arr = [1,1,1,2,3,3,4,5,5];

// const remove = (arr) =>{
//   let read = 0;
//   let write = 0;
//   while(read < arr.length){
//     if(arr[write] !== arr[read]){
//       write++;
//       arr[write] = arr[read];
//     }
//     read++;
//   }
//   return arr.slice(0, write+1);
// }

// console.log(remove(arr));

//8. remove all duplicates in an array

// arr = [1,1,1,2,3,3,4,5,5];

// const remove = (arr) =>{
//   let myMap = new Map();
//   for(let i = 0;i<arr.length; i++){
//     if(myMap.has(arr[i])){
//       myMap.set(arr[i], myMap.get(arr[i])+1);
//     }else{
//       myMap.set(arr[i], 1);
//     }
//   }
//   for(let i = 0; i<arr.length; i++){
//     if(myMap.get(arr[i]) > 1){
//       arr[i] = null;
//     }
//   }

//   let i = 0;
//   while(i < arr.length){
//     if(arr[i] === null){
//       arr.splice(i,1);
//     }else{
//       i++;
//     }
//   }
//   return arr;
// }

// console.log(remove(arr));