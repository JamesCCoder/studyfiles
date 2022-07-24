//1.1 Fibonacci

// const fi = (n) => {
//   let i = 1;
//   let j = 1;
//   for (let m = 3; m <= n; m++) {
//     let sum = i + j;
//     i = j;
//     j = sum;
//   }
//   return j;
// };

// console.log(fi(5));

//1.2 Fibonacci

// const fi = (n) => {
//   let res = [];
//   res[0] = 1;
//   res[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     res[i] = res[i - 1] + res[i - 2];
//   }
//   return res[n - 1];
// };

// console.log(fi(5));

//1.3 Fibonacci

// const fi = (n) => {
//   if (n < 0) return 0;
//   if (n == 0) return 1;
//   return fi(n - 1) + fi(n - 2);
// };

// console.log(fi(5));

// 2.1 Minimum Operations

// const mini = (n) => {
//   if (n == 1) {
//     return 1;
//   }
//   if (n % 2 == 0) {
//     return 1 + mini(n / 2);
//   } else {
//     return 2 + mini((n - 1) / 2);
//   }
// };

// console.log(mini(7));

// 2.2 Minimum Operations

// const mini = (n) => {
//   if (n == 1) {
//     return 1;
//   }
//   if (n % 2 == 0) {
//     return 1 + mini(n / 2);
//   } else {
//     return 2 + mini((n - 1) / 2);
//   }
// };

// console.log(mini(7));

//3. minimum steps to delete to be a palindrome

//4. minimum number of coins

// const coins = [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000];

// const number = (n) => {
//   let res = [];
//   if (n >= 0) {
//     for (let i = coins.length - 1; i >= 0; i--) {
//       while (n >= coins[i]) {
//         n -= coins[i];
//         res.push(coins[i]);
//       }
//     }
//   }
//   return res;
// };

// console.log(number(45));

//5.1 count numbers of hops(1-2)

// const hop = (n) => {
//   if (n < 0) return 0;
//   if (n == 0) return 1;
//   return hop(n - 1) + hop(n - 2);
// };
// console.log(hop(6));

//5.2 count numbers of hops(1,3,5)

// const hop = (n) => {
//   if (n < 0) return 0;
//   if (n == 0) return 1;
//   return hop(n - 1) + hop(n - 3) + hop(n - 5);
// };
// console.log(hop(6));

//6. minimum number of deletions and insertions

//7.1 subset sum problem

// const arr = [1, 2, 3, 34, 4, 12, 5, 1, 2];

// const subset = (arr, target) => {
//   let sum = 0;
//   let res = 0;
//   let test = [];
//   for (let i = 0; i < arr.length; i++) {
//     sum = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       sum = arr[i] + arr[j];
//       for (let k = j + 1; k < arr.length; k++) {
//         sum = arr[i] + arr[j] + arr[k];
//         if (sum == target) res++;
//       }
//     }
//   }
//   return res;
// };

// console.log(subset(arr, 6));


//8. coin change

// let coins = [2, 3, 5];

// const getCoin = (coins, target) =>{
//    let dp = Array(target + 1).fill(Infinity);
//    dp[0] = 0;
//    for(let coin of coins){
//       for(let i = coin; i<=target; i++){
//          dp[i] = Math.min(dp[i], dp[i - coin] + 1);
//       }
//    }
//    return dp[target] === Infinity ? -1 : dp[target];
// }
           
// console.log(getCoin(coins, 22));


//8. largest sum of non-adjacent numbers
//9. maximum product subarray
//10. paint house
