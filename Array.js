// 1. array rotate
// arr = [1, 2, 3, 4, 5, 6, 7];

// let abc = (arr, m) => {
//   let n = arr.length;
//   let tmp = [];
//   if (m < 0) m = m + n;
//   for (let i = 0; i < n - m; i++) {
//     tmp.push(arr[i]);
//   }
//   for (let i = 0; i < m; i++) {
//     arr[i] = arr[n - m + i];
//   }
//   for (let i = m; i < n; i++) {
//     arr[i] = tmp[i - m];
//   }
//   return arr;
// };

// console.log(arr);
// console.log(abc(arr, -3));

//2. rotated array find one

// let arr = [5, 6, 7, 8, 9, 1, 2, 3, 4];

// const getNumber = (arr, m) => {
//   let s = 0;
//   let e = arr.length - 1;
//   while (s <= e) {
//     let mid = Math.floor(s + (e - s) / 2);
//     if (arr[mid] == m) return mid;
//     if (arr[s] < arr[mid]) {
//       if (arr[s] <= m && m < arr[mid]) {
//         e = mid - 1;
//       } else {
//         s = mid + 1;
//       }
//     } else {
//       if (arr[mid] < m && m <= arr[e]) {
//         s = mid + 1;
//       } else {
//         e = mid - 1;
//       }
//     }
//   }
//   return -1;
// };

// console.log(getNumber(arr, 5));

// 3. max / min index for some number

// const arr = [1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 5, 6, 7, 8];

// const findIndex = (arr, m) => {
//   let small = 0;
//   let large = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == m) {
//       small = i;
//       break;
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == m) {
//       large = i;
//     }
//   }
//   return [small, large];
// };

// console.log(findIndex(arr, 3));

// 4. remove all 0 to front

// const arr = [1, 2, 3, 4, 5, 7, 8, 0, 0, 0, 1, 2, 3];

// const allZero = (arr) => {
//   let read = arr.length - 1;
//   let write = arr.length - 1;
//   while (read >= 0) {
//     if (arr[read] != 0) {
//       arr[write] = arr[read];
//       write--;
//     }
//     read--;
//   }
//   while (write >= 0) {
//     arr[write] = 0;
//     write--;
//   }
//   return arr;
// };

// console.log(allZero(arr));

// 5. remove all 0 to end

// const arr = [1, 0, 4, 3, 2, 0, 0, 9, 6, 12];

// const zeroMove = (arr) => {
//   let read = 0;
//   let write = 0;
//   while (read < arr.length) {
//     if (arr[read] != 0) {
//       arr[write] = arr[read];
//       write++;
//     }
//     read++;
//   }
//   while (write < arr.length) {
//     arr[write] = 0;
//     write++;
//   }
//   return arr;
// };

// console.log(zeroMove(arr));

// 6. two sum

// const arr = [1, 3, 4, 6, 2, 1, 5, 6];

// const twoSum = (arr, sum) => {
//   let res = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (res.has(sum - arr[i])) {
//       return [i, res.get(sum - arr[i])];
//     }
//     res.set(arr[i], i);
//   }
// };

// console.log(twoSum(arr, 11));

// 7. remove element

// const arr = [1, 2, 3, 4, 4, 5, 6];

// const remove = (arr, num) => {
//   let read = 0;
//   let write = 0;
//   while (read < arr.length) {
//     if (arr[read] != num) {
//       arr[write] = arr[read];
//       write++;
//     }
//     read++;
//   }
//   // while (write < arr.length) {
//   //   arr[write] = undefined;
//   //   write++;
//   // }
//   return arr.slice(0, write); //截取部分
// };
// console.log(remove(arr, 4));

// 8. remove duplicate from array

// const arr = [1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 7];

// const removeDuplicate = (arr) => {
//   let count = 1;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] != arr[i - 1]) {
//       arr[count] = arr[i];
//       count++;
//     }
//   }
//   return arr.slice(0, count);
// };

// console.log(removeDuplicate(arr));

// 9. remove all duplicates from array

// const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 8, 9];

// const remove = (arr) => {
//   let arr_1 = arr;
//   let index = [];
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr_1.length; j++) {
//       if (arr[i] == arr_1[j]) {
//         count++;
//       }
//     }
//     if (count > 1) {
//       index.push(i);
//     }
//   }
//   let sign = 0;
//   for (let i = 0; i < index.length; i++) {
//     if (sign == 0) {
//       arr.splice(index[i], 1);
//     } else {
//       arr.splice(index[i] - sign, 1);
//     }
//     sign++;
//   }
//   return arr;
// };

// console.log(remove(arr));

// 10. plus one

// const arr = [9, 9, 9];

// const addOne = (arr) => {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === 9) {
//       arr[i] = 0;
//     } else {
//       arr[i]++;
//       return arr;
//     }
//   }
//   return [1, ...arr];
// };

// console.log(addOne(arr));

//11. missing number

// const arr = [5, 3, 4, 2, 1];
// const arr1 = [2, 1, 4, 6, 5, 0];
// const arr2 = [4, 5, 3, 2, 1, 6, 0];

// const missing = (arr) => {
//   arr.sort();
//   if (arr[0] != 0) return 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] != i) {
//       return i;
//     }
//   }
//   return arr.length;
// };

// console.log(missing(arr));
// console.log(missing(arr1));
// console.log(missing(arr2));

//12.1 smallest common number

// const arr = [0, 2, 4, 5, 7, 9, 11, 13, 14];
// const arr1 = [4, 5, 6, 7, 9, 12, 14];
// const arr2 = [3, 6, 7, 12, 14];

// const findOne = (arr1, arr2, arr3) => {
//   let i = 0;
//   let j = 0;
//   let k = 0;
//   while (i < arr1.length && j < arr2.length && k < arr3.length) {
//     if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) return arr1[i];

//     if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
//       i++;
//     } else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
//       j++;
//     } else if (arr3[k] <= arr1[i] && arr3[k] <= arr2[j]) {
//       k++;
//     }
//   }
//   return -1;
// };

// console.log(findOne(arr, arr1, arr2));

//12.2  common number

// const arr = [0, 2, 4, 5, 7, 9, 11, 13, 14];
// const arr1 = [4, 5, 6, 7, 9, 12, 14];
// const arr2 = [3, 6, 7, 12, 14];

// const findOne = (arr1, arr2, arr3) => {
//   let i = 0;
//   let j = 0;
//   let k = 0;
//   let res = [];
//   while (i < arr1.length && j < arr2.length && k < arr3.length) {
//     if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) res.push(arr1[i]);

//     if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
//       i++;
//     } else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
//       j++;
//     } else if (arr3[k] <= arr1[i] && arr3[k] <= arr2[j]) {
//       k++;
//     }
//   }
//   return res;
// };

// console.log(findOne(arr, arr1, arr2));

//13. two sum and sorted array

// const arr = [1, 2, 3, 4, 7, 8];

// let findSumOfTwo = function (nums, val) {
//   nums = nums.sort();
//   let res = [-1, -1];
//   let start = 0;
//   let end = nums.length - 1;
//   while (start < end) {
//     let sum = nums[start] + nums[end];
//     if (sum == val) {
//       res[0] = start;
//       res[1] = end;
//       break;
//     } else if (sum < val) {
//       start++;
//     } else {
//       end--;
//     }
//   }
//   return res;
// };

// console.log(findSumOfTwo(arr, 11));

// 14. sliding window

// const arr = [2, 4, 1, 0, 4, 2, 6, 7];

// let printKMax = (arr, k) => {
//   let max = -1;
//   let n = arr.length;
//   let res = [];
//   for (let i = 0; i < n - k + 1; i++) {
//     max = arr[i];

//     for (let j = 1; j < k; j++) {
//       if (arr[i + j] > max) {
//         max = arr[i + j];
//       }
//     }
//     res.push(max);
//   }
//   return res;
// };

// console.log(printKMax(arr, 4));

//15. max and min in an array

// const arr = [1, 2, 0, 4, 999, 2, -3];
// const maxAndMin = (arr) => {
//   const res = [];
//   let max = -9999;
//   let min = 9999;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//     if (arr[i] < min) min = arr[i];
//   }
//   res.push(max);
//   res.push(min);
//   return res;
// };

// console.log(maxAndMin(arr));

//16. reverse an array

// const arr = [1, 5, 3, 2, 0, 8, 11, 14];

// const reverse = (arr) => {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr1.unshift(arr[i]);
//   }
//   return arr1;
// };

// console.log(reverse(arr));

//17. Kth max and min element of an array

// const arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 0, 11, 14, 15];

// const kmami = (arr, num) => {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(arr);
//   let count = 1;
//   let min = 999;
//   let max = -999;
//   let res = [];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       count++;
//       if (count == num) {
//         min = arr[i];
//         break;
//       }
//     }
//   }
//   count = 1;
//   for (let i = arr.length - 1; i >= 1; i--) {
//     if (arr[i] != arr[i - 1]) {
//       count++;
//       if (count === num) {
//         max = arr[i - 1];
//         break;
//       }
//     }
//   }
//   res.push(min);
//   res.push(max);
//   return res;
// };

// console.log(kmami(arr, 3));

// 18. subarray with given sum

// const arr = [1, 3, 4, 7, 11, 24, 21, 1, 2, 3];

// const subarray = (arr, target) => {
//   let sum = 0;
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     sum = arr[i];
//     for (let j = i + 1; j <= arr.length; j++) {
//       if (sum == target) {
//         res.push(i);
//         res.push(j - 1);
//       }
//       if (sum > target) {
//         break;
//       }
//       sum += arr[j];
//     }
//   }
//   return res;
// };

// console.log(subarray(arr, 27));

//19. move all negative element to one side of array

// const arr = [5, 6, 3, -1, -2, 5, 0, 3, -4];

// const moveNegative = (arr) => {
//   const res = [];
//   const neg = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       neg.unshift(arr[i]);
//     } else {
//       res.push(arr[i]);
//     }
//   }
//   for (let i = 0; i < neg.length; i++) {
//     res.unshift(neg[i]);
//   }
//   return res;
// };

// console.log(moveNegative(arr));

//20.1 count substring of given sum

// const arr = [1, 5, 7, 1, 5, 1];

// const countPairs = (arr, target) => {
//   let sum = 0;
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = arr[i];
//     for (let j = i+1; j <= arr.length; j++) {
//       sum += arr[j];
//       if (sum == target) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

// console.log(countPairs(arr, 6));

//20.2 count pairs of given sum

// const arr = [1, 1, 1, 1];

// const countPairs = (arr, target) => {
//   let sum = 0;
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j <= arr.length; j++) {
//       sum = arr[i] + arr[j];
//       if (sum == target) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

// console.log(countPairs(arr, 2));

//21.1 first repeat element(repeat twice)

// const arr = [1, 5, 7, 8, 3, 4, 3, 5, 6];

// const repeat = (arr) => {
//   let myMap = new Map();
//   let res;
//   for (let i = 0; i < arr.length; i++) {
//     if (myMap.has(arr[i])) {
//       res = myMap.get(arr[i]);
//       break;
//     }
//     myMap.set(arr[i], i);
//   }
//   return res;
// };

// console.log(repeat(arr));

// 21.2 first repeat element (first index)

// const arr = [1, 5, 7, 8, 3, 4, 3, 5, 6];

// const repeat = (arr) => {
//   let myMap = new Map();
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (myMap.has(arr[i])) {
//       res.push(myMap.get(arr[i]));
//     }
//     myMap.set(arr[i], i);
//   }
//   res.sort(function (a, b) {
//     return a - b;
//   });
//   return res[0];
// };

// console.log(repeat(arr));

// 22. none-repeating element

// const arr = [-1, 2, -1, 3, 2];

// const norepeat = (arr) => {
//   const myMap = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (myMap.has(arr[i])) {
//       myMap.set(arr[i], myMap.get(arr[i]) + 1);
//     } else {
//       myMap.set(arr[i], 1);
//     }
//   }
//   for (let i of arr) {
//     if (myMap.get(i) == 1) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(norepeat(arr));

//23. subarrays with equal 1s and 0s

// const arr = [1, 0, 0, 1, 0, 1, 1];

// const equal = (arr) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let zero = arr[i] === 0 ? 1 : 0;
//     let one = arr[i] === 1 ? 1 : 0;
//     for (let j = i + 1; j <= arr.length; j++) {
//       let target = [];
//       arr[j] === 0 ? zero++ : one++;
//       if (zero == one) {
//         target.push(i);
//         target.push(j);
//         res.push(target);
//       }
//     }
//   }
//   return res;
// };

// console.log(equal(arr));

//24. alternate position and negative numbers

// const arr = [9, 4, -2, -1, 5, 0, -5, -3, 2];
// const arr1 = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];

// const alternate = (arr) => {
//   const res = [];
//   let positive = [];
//   let negative = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       positive.push(arr[i]);
//     } else {
//       negative.push(arr[i]);
//     }
//   }
//   let i = 0;
//   let j = 0;
//   while (i < positive.length || j < negative.length) {
//     if (i < positive.length) {
//       res.push(positive[i]);
//       i++;
//     }
//     if (j < negative.length) {
//       res.push(negative[j]);
//       j++;
//     }
//   }
//   return res;
// };

// console.log(alternate(arr1));

//25. subarray with 0 sum

// const arr = [4, 2, -3, 1, 6];

// const isZero = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = arr[i];
//     for (let j = i + 1; j <= arr.length; j++) {
//       sum += arr[j];
//       if (sum === 0) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(isZero(arr));

//26. largest subarray

// const arr = [1, 2, 3, -2, 5];
// const arr1 = [-1, -2, -3, -4];

// const largest = (arr) => {
//   let max = 0;
//   let res = -999;
//   for (let i = 0; i < arr.length; i++) {
//     max = arr[i];
//     for (let j = i + 1; j <= arr.length; j++) {
//       if (max > res) {
//         res = max;
//       }
//       max += arr[j];
//     }
//   }
//   return res;
// };

// console.log(largest(arr));

//27. largest product of subarray

// const arr = [6, -3, -10, 0, 2];
// const arr1 = [2, 3, 4, 5, -1, 0];

// const large = (arr) => {
//   let max = 1;
//   let res = -999;
//   for (let i = 0; i < arr.length; i++) {
//     max = arr[i];
//     for (let j = i + 1; j <= arr.length; j++) {
//       if (max > res) {
//         res = max;
//       }
//       max *= arr[j];
//     }
//   }
//   return res;
// };

// console.log(large(arr1));

//28. longest consecutive subsequence

// const arr = [2, 6, 1, 9, 4, 5, 3];
// const arr1 = [1, 9, 3, 10, 4, 20, 2];

// const long = (arr) => {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   let max = 1;
//   let res = -999;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] - arr[i - 1] === 1) {
//       max++;
//     } else {
//       max = 1;
//     }
//     if (max > res) res = max;
//   }
//   return res;
// };

// console.log(long(arr1));

//29. minimum element in a sorted and rotated array

// const arr = [4, 5, 1, 2, 3];
// const arr1 = [10, 20, 30, 40, 50, 5, 7];
// const mini = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//       return arr[i];
//     }
//   }
//   return arr[0];
// };

// console.log(mini(arr1));

//30. max sum in the configuration

// const arr = [8, 3, 1, 2];

// const maxi = (arr) => {
//   let res = -999;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr.length; j++) {
//       let index = (i + j) % arr.length;
//       sum += j * arr[index];
//     }
//     res = Math.max(res, sum);
//   }
//   return res;
// };

// console.log(maxi(arr));

//31 minimize the heights

// const arr = [3, 9, 12, 16, 20];

// const mini = (arr, k) => {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > k) {
//       arr[i] = arr[i] - k;
//     } else {
//       arr[i] = arr[i] + k;
//     }
//   }
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   return arr;
// };

// console.log(mini(arr, 3));

//32. palindrome

// let arr = [1, 2, 2, 3, 4, 5, 6, 6, 6, 5, 4, 3, 2, 1];

// const palindrome = (arr) => {
//   let n = Math.floor(arr.length / 2);
//   let i = 0;
//   let j = arr.length - 1;
//   while (i <= n) {
//     if (arr[i] !== arr[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// };

// console.log(palindrome(arr));
