//1. reverse words in a given string

// const s = "i.like.this.program.very.much";

// const reverse = (s) => {
//   return s.split(".").reverse().join(".").toString();
// };

// console.log(reverse(s));

//2. Longest Common Prefix in an Array

// const arr = ["geeksforgeeks", "geeks", "geek", "geezer"];

// const common = (arr) => {
//   arr.sort();
//   let size = arr.length;
//   let n = Math.min(arr[0].length, arr[size - 1].length);
//   let i = 0;
//   while (i < n && arr[0][i] == arr[size - 1][i]) {
//     i++;
//   }
//   let res = arr[0].substring(0, i);
//   return res;
// };

// console.log(common(arr));

//3.1 roman to number
//3.2 number to roman

//4. closest strings

// const arr = ["the", "quick", "the", "brown", "fox", "quick", "fox"];
// word1 = "the";
// word2 = "fox";

// const closest = (arr, word1, word2) => {
//   let res = 999;
//   let min = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == word1) {
//       for (let j = i + 1; j <= arr.length; j++) {
//         if (arr[j] == word2) {
//           min = j - i;
//           if (j - i < res) res = j - i;
//         }
//       }
//     }
//   }
//   return res;
// };

// console.log(closest(arr, "the", "fox"));

//5.Equal point in a string of brackets

// const str = "(()))(()()())))()))";

// const equal = (str) => {
//   let count = 0;
//   for (let i of str) {
//     if (i === ")") {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(equal(str));

//6. isomorphic strings

// const str1 = "aabbcc";
// const str2 = "xxzzit";

// const iso = (str1, str2) => {
//   let myMap = new Map();
//   let a;
//   if (str1.length != str2.length) {
//     return false;
//   }

//   let num1 = 1;
//   let num2 = 1;

//   for (let i = 1; i < str1.length; i++) {
//     if (str1[i] != str1[i - 1]) num1++;
//     if (str2[i] != str2[i - 1]) num2++;
//   }
//   if (num1 != num2) return false;

//   let n = str1.length;
//   for (let i = 0; i < n; i++) {
//     if (myMap.has(str1[i])) {
//       a = myMap.get(str1[i]);
//       if (a != str2[i]) {
//         return false;
//       }
//     }
//     myMap.set(str1[i], str2[i]);
//   }
//   return true;
// };

// console.log(iso(str1, str2));

// 7.  anagrams(k)
// const str1 = "fodracxs";
// const str2 = "clsaoxrf";

// const anagrams = (str1, str2) => {
//   if (str1.length != str2.length) return false;
//   let n = str1.length;
//   let hash = new Array(26);
//   hash.fill(0);
//   for (let i = 0; i < n; i++) {
//     hash[str1[i].charCodeAt() - "a".charCodeAt()]++;
//   }
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     if (hash[str2[i].charCodeAt() - "a".charCodeAt()] > 0) {
//       hash[str2[i].charCodeAt() - "a".charCodeAt()]--;
//     } else {
//       count++;
//     }
//   }
//   if (count > 0) return false;
//   return true;
// };
// console.log(anagrams(str1, str2));

//8. pangram

// const str = "Bawds jog, flick quartz, vex nymph";

// const pangram = (str) => {
//   const hash = new Array(26);
//   hash.fill(false);
//   for (let i = 0; i < str.length; i++) {
//     if ("A" <= str[i] && str[i] <= "Z") {
//       hash[str[i].charCodeAt() - "A".charCodeAt()] = true;
//     }
//     if ("a" <= str[i] && str[i] <= "z") {
//       hash[str[i].charCodeAt() - "a".charCodeAt()] = true;
//     }
//   }
//   for (let i = 0; i <= 25; i++) {
//     if (hash[i] == false) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(pangram(str));

//9.palindrome

// const arr = "geekskeega";

// const palin = (arr) => {
//   const n = Math.floor(arr.length / 2);
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

// console.log(palin(arr));

//10. minimum deletions
