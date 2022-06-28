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

//11. remove vowels from a string

// const str = "welcome to geeksforgeeks";

// const remove = (str) =>{
//    let vowels = ["a", "e","i","o","u","A","E","I","O","U"];
//    let res = "";
//    for(let i of str){
//        if(!vowels.includes(i)){
//            res += i;
//        }
//    }
//    return res;
// }

// console.log(remove(str));

// 12.1 defanging an IP

// const str = "1.1.1.1";

// const defang = (str) =>{
//     const res = str.replaceAll(".","[.]");
//     return res;
// }

// console.log(defang(str));

// 12.2 defanging an IP

// const str = "1.1.1.1";
// const defang = (str) =>{
//     let res = "";
//     for(let i of str){
//         if(i === "."){
//             res+= "[.]";
//         }else{
//             res+=i;
//         }
//     }
//     return res;
// }

// console.log(defang(str));

//13. jewelry and stone

// const jewel="aA";
// const stone = "aAAbbbb";

// const match = (jewel, stone) =>{
//     let res = 0;
//     for(let i of jewel){
//         for(let j of stone){
//             if(i === j){
//                  res++;
//             }
//         }
//     }
//     return res;
// }

// console.log(match(jewel,stone));

//14. shuffle string

// const s = "codeleet";
// const indice = [4,5,6,7,0,2,1,3];

// const shuffle = (s, indice) =>{
//     let res = [];
//     for(let i = 0; i<s.length; i++){
//         res[indice[i]] = s[i];
//     }
//     return res.join("");
// }

// console.log(shuffle(s,indice));

// 15 maximum balanced string 

// const str = "LRLLRRLRRL";

// const partition = (str) =>{
//     let l = 0;
//     let r = 0;
//     let res = 0;
//     for(let i of str){
//         if(i === "L"){
//             l++;
//         }else if(i === "R"){
//             r++;
//         }
//         if(l === r){
//             res++;
//         }
//     }
//     return res;
// }

// console.log(partition(str));

//16. lowercase(64,91,32)

// const str = "HEllo";

// const lower = (str) =>{
//     let res = "";
//     for(let i of str){
//         if(i.charCodeAt() > 64 && i.charCodeAt()<91){
//             res += String.fromCharCode(i.charCodeAt() + 32);
//         }else{
//             res += i;
//         }
//     }
//     return res;
// }

// console.log(lower(str));


//17. morse code

//18. substring with only one distinct letter

// const str = "aaaba";

// const sub = (str) =>{
//     let i = 0;
//     let j = 0;
//     let res = 0;
//     while(i < str.length){
//         while(j<str.length && str[i] === str[j]){
//             res++;
//             j++;  
//         }
//         i++;
//         j = i;
//     }
//     return res;
// }

// console.log(sub(str));

//19. robot returns

// const moves = "UDLR";

// const robot = (moves) =>{
//     let x = 0;
//     let y = 0;
//     for(let i of moves){
//         if(i === "U") y++;
//         if(i === "D") y--;
//         if(i === "L") x--;
//         if(i === "R") x++;
//     }
//     return x == 0 && y == 0;
// }

// console.log(robot(moves));

//20. fizz buzz

// const fb = (n) =>{
//     let res = [];
//     for(let i = 1; i<=n; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             res.push("FizzBuzz");
//         }else if(i % 5 === 0){
//             res.push("Buzz");
//         }else if(i % 3 === 0){
//             res.push("Fizz");
//         }else{
//             res.push(i.toString());
//         }
//     }
//     return res;
// }

// console.log(fb(15));

//21. first repeating character

// const str = "afteracademy";

// const first = (str) =>{
//     let hash = new Map();
//     for(let i =0; i<str.length;i++){
//         if(hash.has(str[i])){
//             return hash.get(str[i]);
//         }
//         hash.set(str[i], i);
//     }
//     return -1;
// }

// console.log(first(str));

//22. first non-repeating character

// const str = "abbacdcd";

// const first = (str) =>{
//     let hash = new Map();
//     for(let i =0; i<str.length;i++){
//         if(hash.has(str[i])){
//             hash.set(str[i], hash.get(str[i])+1);
//         }else{
//             hash.set(str[i], 1);
//         }
//     }
//     for(let i = 0; i<str.length; i++){
//         if(hash.get(str[i]) === 1){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(first(str));

//23.revere a string

// const str = "geeksforgeeks";

// const reverse = (str) =>{
//     let res = "";
//     for(let i = str.length - 1; i>=0;i--){
//         res += str[i];
//     }
//     return res;
// }

// console.log(reverse(str));

//24.1 implement strstr

// const str1 = "hello";
// const str2 = "ll";

// const imp = (a,b) => {
//     return a.includes(b);
// }
// console.log(imp(str1, str2));

//24.2 implement strstr

// const str1 = "hello";
// const str2 = "ll";

// const imp = (a,b) => {
//     for(let i = 0; i<a.length - b.length; i++){
//         if(a.substring(i, i + b.length) === b){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(imp(str1, str2));

//25. valid parentheses

// const exp = "[(])";


// const valid = (exp) =>{
//     const res = [];
//     for(let i of exp){
//         if(i === "("){
//             res.push(")");
//         }else if(i === "["){
//             res.push("]");
//         }else if(i === "{"){
//             res.push("}");
//         }else if(res.pop() !== i){
//             return false;
//         }
//     }
//     return res.length === 0;
// }

// console.log(valid(exp));

//26. longest substring without repeating characters

const str = "abcabcbb";

const long = (str) =>{
    
}