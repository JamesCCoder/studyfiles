// Given an integer array nums and an integer k, 
// return true if there are two distinct indices i and j in the array 
// such that nums[i] == nums[j] and abs(i - j) <= k.

nums1 = [1,2,3,1], k1 = 3;
nums2 = [1,0,1,1], k2 = 1;
nums3 = [1,2,3,1,2,3], k3 = 2;

const dup = (arr, k) =>{

    
    
}

console.log(dup(nums1, k1));
console.log(dup(nums2, k2));
console.log(dup(nums3, k3));






























// const dup = (arr, k) =>{
//     let myMap = new Map();
//     for(let i = 0; i<arr.length; i++){
//         if(myMap.has(arr[i])){
//            if(Math.abs(i - myMap.get(arr[i]) <= k)){
//                return true;
//            }
//            myMap.set(arr[i], i);
//         }else{
//             myMap.set(arr[i], i);
//         }
//     }
//     return false;
// }

// console.log(dup(nums1, k1));
// console.log(dup(nums2, k2));
// console.log(dup(nums3, k3));