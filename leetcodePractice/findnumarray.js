// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

nums1 = [4,3,2,7,8,2,3,1];
nums2 = [1,1];


const findOne = (arr) =>{

    
    
}


console.log(findOne(nums1));
console.log(findOne(nums2));































// const findOne = (arr) =>{
//    let res = [];
//    let myMap = new Map();
//    for(let i = 1; i<=arr.length; i++){
//        myMap.set(i, 1);
//    }
//    for(let i = 0; i<arr.length; i++){
//        if(myMap.has(arr[i])){
//            myMap.set(arr[i], myMap.get(arr[i]) - 1);
//        }
//    }
//    for(let i = 1; i<= arr.length; i++){
//        if(myMap.get(i) === 1){
//            res.push(i);
//        }
//    }
//    return res;
// }


// console.log(findOne(nums1));
// console.log(findOne(nums2));