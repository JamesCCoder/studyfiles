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

// 2. Minimum Operations

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
