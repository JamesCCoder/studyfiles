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

height = [5,1,2,4];

let mx = (height) => {
  let maxArea = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};

console.log(mx(height));