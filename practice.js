// 1. peak elememt

// const arr = [1,2,3,4,2];
// const arr1 = [1,2,3];

// const peakElement = (arr) =>{
//    for(let i = 1; i<arr.length; i++){
//        if(arr[i] - arr[i-1] < 0){
//            return arr[i-1];
//        }
//    }
//    return arr[arr.length - 1];
// }

// console.log(peakElement(arr1));

// 2. find minimum and maximum element in an array

// const arr = [3,5,2,11,7,45,7];

// const findmm = (arr) =>{
//     let max = -999;
//     let min = 999;
//     let res = [];
//     for(let i of arr){
//        if(i > max) max = i;
//        if(i < min) min = i; 
//     }
//     res.push(min);
//     res.push(max);
//     return res;
// } 

// console.log(findmm(arr));

//3. reverse an array

// const arr = [1,3,5,7,4,2];

// const reverse = (arr) =>{
//     let res = [];
//     for(let i of arr){
//         res.unshift(i);
//     }
//     return res;
// }

// console.log(reverse(arr));

//4. sort an array

// const arr = [2,3,5,1,6,3,2];

// const sort = (arr) =>{
//     return arr.sort((a,b) => a - b);
// }

// console.log(sort(arr));

//5. Kth largest / smallest element

// arr = [1,4,2,5,6,8,3,2,55,13];

// const kls = (arr, n) =>{
//     let res = [];
//     arr = arr.sort((a,b) => a - b);
//     res.push(arr[n-1]);
//     res.push(arr[arr.length-n]);
//     return res;
// }

// console.log(kls(arr, 2));

//6. subarray with given sum

// arr = [1,2,3,7,6];

// const sub = (arr, target) =>{
//     let res = [-1, -1];
//     for(let i = 0; i<arr.length; i++){
//         let sum = arr[i];
//         for(let j = i+1; j<arr.length; j++){
//             sum += arr[j];
//             if(sum === target){
//                 res[0] = i;
//                 res[1] = j;
//                 break;
//             }
//         }
//     }
//     return res;
// }

// console.log(sub(arr, 12));

//7. move all negative elements to end

// arr = [1, -1,3,2,-7,-5,11,6];

// const move = (arr) =>{
//     let res = [];
//     for(let i of arr){
//         if(i < 0){
//             res.push(i);
//         }else{
//             res.unshift(i);
//         }
//     }
//     return res;
// }
// console.log(move(arr));

//8. union of two arrays

// arr = [85,25,1,32,54,6];
// arr1 = [85,2];

// const union = (arr, arr1) =>{
//     const mySet = new Set();
//     for(let i of arr){
//         mySet.add(i);
//     }
//     for(let i of arr1){
//         mySet.add(i);
//     }
//     return mySet.size;
// }

// console.log(union(arr, arr1));

//9. rotate an array

// const arr = [1,2,3,4,5,6,7,8];

// const rotate = (arr, n) => {
//     let res = [];
//     for(let i = 0; i<arr.length-n; i++){
//         res.push(arr[i]);
//     }
//     for(let i = arr.length-1; i>arr.length-1 -n; i--){
//         res.unshift(arr[i]);
//     }
//     return res;
// }
// console.log(rotate(arr,1));

//10. missing integer

// arr = [9,4,2,6,3,5];

// const miss = () =>{
//     arr = arr.sort((a, b) => a - b);
//     if(arr[0] !== 1) return 1;
//     for(let i = 0; i< arr.length; i++){
//        if(arr[i] !== i + 1){
//            return i + 1;
//        }
//     }
//     return arr.length + 1;
// }

// console.log(miss(arr));

//11. count pairs

// arr = [1,5,7,1];

// const pair = (arr, target) =>{
//    let res = 0;
//    for(let i = 0; i< arr.length; i++){
//        for(let j = i + 1; j<arr.length; j++){
//            if(arr[i]+ arr[j] === target){
//                res++;
//            }
//        }
//    }
//    return res;
// }

// console.log(pair(arr, 6));

//12. duplicate

// arr = [2,3,1,2,3];

// const duplicate = (arr) =>{
//    let mySet = new Set();
//    let res = [];
//    for(let i of arr){
//     if(mySet.has(i)){
//         res.push(i);
//     }   
//     mySet.add(i);
//    }
//    return res;
// }

// console.log(duplicate(arr));

//13. common elements in three souted arrays

// arr1 = [1,5,10,20,40,80];
// arr2 = [6,7,20,80,100];
// arr3 = [3,4,15,20,30,70,80,120];

// const common = (arr1, arr2, arr3) =>{
//     let i = 0;
//     let j = 0;
//     let k = 0;
//     let res = [];
//     while(i<arr1.length && j<arr2.length && k < arr3.length){
//         if(arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) i++;
//         if(arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) j++;
//         if(arr3[k] <= arr1[i] && arr3[k] <= arr2[j]) k++;
//         if(arr1[i] === arr2[j] && arr2[j] === arr3[k]){
//             res.push(arr1[i]);
//         }
//     }
//     return res;
// }

// console.log(common(arr1, arr2, arr3));

//14. repeat element (element + index)

// arr = [1,5,3,4,3,5,6];

// const repeat = (arr) =>{
//     let mySet = new Set();
//     let res = [];
//     for(let i of arr){
//         if(mySet.has(i)){
//            res.push(i);
//         }
//         mySet.add(i);
//     }
//     return res;
// }

// console.log(repeat(arr));

// 15. first non-repeating element

// arr = [-1,-1,-1,2,-1,3,2,4,6];

// const non = (arr) =>{
//    let hash = new Map();
//    let res = [];
//    for(let i = 0; i<arr.length; i++){
//        if(hash.has(arr[i])){
//            hash.set(arr[i], hash.get(arr[i]) + 1);
//        }else{
//            hash.set(arr[i], 1);
//        }
//    }
//    for(let i of arr){
//        if(hash.get(i) === 1){
//            res.push(i);
//        }
//    }
//    return res;
// }
// console.log(non(arr));

//16. subarray with equal 1s and 0s

// arr = [1,0,0,1,0,1,1];

// const sub = (arr) =>{
//     let res = 0;
//     let a = 0; 
//     let b = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] == 0){
//             a = 1;
//             b = 0;
//         }else{
//             a = 0;
//             b = 1;
//         }
//         for(let j = i + 1;j<arr.length; j++){
//            if(arr[j] === 0){
//                a++;
//            }else{
//                b++;
//            }
//            if(a === b){
//                res++;
//            }
//         }
//     }
//     return res;
// }

// console.log(sub(arr));

//17. subarray with sum of 0

// arr = [4,2,-3,1,6];

// const sub = (arr) =>{
//     let res = [];
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum = arr[i];
//         for(let j = i + 1;j<arr.length; j++){
//             sum += arr[j];
//             if(sum === 0){
//                 res.push(i);
//                 res.push(j);
//             }
//         }
//     }
//     return res;
// }

// console.log(sub(arr));

//18. max subarray

// arr = [-1,-2,-3,-4];

// const mx = (arr) =>{
//     let max = -999;
//     let res = [];
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum = arr[i];
//         for(let j = i + 1;j<arr.length; j++){
//             sum += arr[j];
//             if(sum > max){
//                max = sum;
//                res[0] = i;
//                res[1] = j;
//             } 
//         }
//     }
//     return res;
// }

// console.log(mx(arr));

//19. max product subarray

// arr = [6,-3,-10,0,2];

// const mx = (arr) =>{
//     let max = -999;
//     let product = 1;
//     let res = [];
//     for(let i = 0; i<arr.length; i++){
//         product = arr[i];
//         for(let j = i + 1; j<arr.length; j++){
//             product *= arr[j];
//             if(product > max){
//                 max = product;
//                 res[0] = i;
//                 res[1] = j;
//             }
//         }
//     }
//     return res;
// }

// console.log(mx(arr));

//20. longest consecutive subsequence

// arr = [1,9,3,10,4,20,2];

// const long = (arr) =>{
//     let max = 0;
//     let sum = 1;
//     arr.sort((a,b) => a - b);
//     for(let i = 1; i<arr.length; i++){
//         if(arr[i] - arr[i-1] === 1){
//            sum++;
//         }else{
//             sum = 1;
//         }
//         if(sum > max) max = sum;
//     }
//     return max;
// }

// console.log(long(arr));



//21. minimize the height

// arr =[1, 5, 8, 10];

// const height = (arr, target) =>{
//      for(let i = 0 ; i<arr.length; i++){
//          if(arr[i] >= target){
//              arr[i] -= target;
//          }else{
//              arr[i] += target;
//          }
//      }
//      arr.sort((a,b) => a - b);
//      return arr[arr.length-1] - arr[0];
// }

// console.log(height(arr, 4));

//22. stock span problem

// arr = [10,4,5,90,120,80];

// const stock = (arr) =>{
//     let res = [];
//     let sum;
//     for(let i = arr.length - 1; i>=0; i--){
//         sum = 1;
//         for(let j = i - 1; j>=0; j--){
//             if(arr[i] > arr[j]){
//                 sum++;
//             }else{
//                 break;
//             }
//         }
//         res.unshift(sum);
//     }
//     return res;
// }

// console.log(stock(arr));

//23.triplet sum in array

// arr = [1,4,45,6,10,8];

// const trip = (arr, target) =>{
//     let res = [];
//     for(let i = 0; i<arr.length; i++){
//         for(let j = i + 1; j<arr.length; j++){
//             for(let k = j + 1; k<arr.length; k++){
//                 if(arr[i]+arr[j]+arr[k] === target){
//                     res.push(arr[i]);
//                     res.push(arr[j]);
//                     res.push(arr[k]);
//                 }
//             }
//         }
//     }
//     return res;
// }

// console.log(trip(arr, 13));

//24. array subset of another array

// arr1 = [10, 5, 2, 23, 19];
// arr2 = [19, 5, 3];

// const sub = (arr1, arr2) =>{
//     let mySet = new Set();
//     let res = 0;
//     for(let i of arr1){
//         mySet.add(i);
//     }
//     for(let i of arr2){
//         if(mySet.has(i)){
//             res++;
//         }
//     }
//     return res === arr2.length;
// }

// console.log(sub(arr1, arr2))

//25. majority element

// arr = [1,2,3];

// const major = (arr) =>{
//     let hash = new Map();
//     for(let i = 0; i<arr.length; i++){
//         if(hash.has(arr[i])){
//             hash.set(arr[i], hash.get(arr[i]) + 1);
//         }else{
//             hash.set(arr[i], 1);
//         }
//     }
//     for(let i of arr){
//         if(hash.get(i) > (arr.length / 2)){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(major(arr));

//26. wave array

// arr = [2,4,7,8,9,10];

// const wave = (arr) =>{
//     for(let i = 1; i<arr.length; i=i+2){
//        let tmp = arr[i];
//        arr[i] = arr[i-1];
//        arr[i-1] = tmp;
//     }
//     return arr;
// }

// console.log(wave(arr));

//27. transition point 

// arr = [0,0,0,1,1];

// const find = (arr) =>{
// for(let i = 0; i< arr.length; i++){
//     if(arr[i] === 1){
//         return i;
//     }
   
// }
//  return -1;
// }

// console.log(find(arr));

//28. leaders in an array

// arr = [1,2,3,4,0];

// const leader = (arr) =>{
//     let res = [];
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum = 0;
//         for(let j = i + 1; j<arr.length; j++){
//            sum += arr[j];
//         }
//         if(arr[i] >= sum){
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }

// console.log(leader(arr));

// 29. largest subarray with 0 sum

// arr = [15, -2, 2,-8, 1, 7, 10 ,23];

// const large = (arr) => {
//    let max = 0;
//    let sum = 0;
//    for(let i = 0; i<arr.length; i++){
//       sum = arr[i];
//       for(let j = i + 1; j<arr.length; j++){
//           sum += arr[j];
//           if(sum === 0){
//               if(j - i + 1 > max){
//                   max = j - i + 1;
//               }
//           }
//       }
//    }
//    return max;
// }
// console.log(large(arr));

//////////////30. frequencies of limited range array elements

// arr = [2,3,2,3,5];

// const fre = (arr) =>{
//     let hash = new Map();
//     let res = [];
//     for(let i = 0; i<arr.length; i++){
//        if(hash.has(arr[i])){
//            hash.set(arr[i], hash.get(arr[i]) + 1);
//        }else{
//            hash.set(arr[i], 1);
//        } 
//     }
//     for(let i = 1; i<=arr.length; i++){
//         res.push(hash.get(i) ? hash.get(i) : 0);
//     }
    
//     return res;
// }

// console.log(fre(arr));

//31. maximum index

// arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];

// const mx = (arr) =>{
//     let max = 0;
//     for(let i = 0; i<arr.length; i++){
//         for(let j = i + 1; j<arr.length; j++){
//             if(arr[i] < arr[j]){
//                 if(j - i > max) max = j - i;
//             }
//         }
//     }
//     return max;
// }

// console.log(mx(arr));

/////////////32. product array puzzle

// arr =[10,3,5,6,2];

// const product = (arr) =>{
//     let time = 1;
//     let res = [];
//     for(let i of arr){
//         time *= i;
//     }
//     for(let i = 0; i<arr.length; i++){
//         res.push(time / arr[i]);
//     }
//     return res;
// }

// console.log(product(arr));

//33. first repeating element

// arr =[1,5,3,4,3,5,6];

// const first = (arr) =>{
//     let mySet = new Set();
//     for(let i of arr){
//         if(mySet.has(i)){
//             return i;
//         }
//         mySet.add(i);
//     }
//     return -1;
// }

// console.log(first(arr));

////////////////34. rearrange array

// arr = [1,2,3,4,5,6];

// const rearr = (arr) =>{
//     let a = 0;
//     let b = arr.length - 1;
//     let res = [];
//     let i = 0;
//     while(i < arr.length){
//         if(i % 2 === 0){
//            res[i] = arr[b];
//            b--;
//            i++;
//         }else{
//            res[i] = arr[a];
//            a++;
//            i++;
//         }
//     }
//     return res;
// }

// console.log(rearr(arr));

//35. maximum of all subarrays of size k

arr = [8,5,10,7,9,4,15,12,90,13];

//27. equilibrium point

//22. find a minimum element in a sorted and rotated array

//23. max sum in the configuration

//24. minimum number of jumps

//27. trapping rain water

//28. count inversion

//29. binary search

//30. celebrity problem

//31. remove duplicate

//32. reverse array in groups

//33. coin change

//34. stock buy and sell