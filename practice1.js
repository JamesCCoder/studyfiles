//1. parenthesis checker

// str1 = "{([])}";
// str2 = "([]";
// str3 = "{{{[]}}}"

// const paren = (str) =>{
//     let res = [];
//     for(let i of str){
//         if(i === "("){
//             res.push(")");
//         }else if(i === "["){
//             res.push("]");
//         }else if(i === "{"){
//             res.push("}");
//         }else if(i !== res.pop()){
//             return false;
//         }
//     }
//     return res.length === 0;
// }

// console.log(paren(str3));

//2. reverse a string

// str = "Geeks";

// const reverse = (str) =>{
//     let res = "";
//     for(let i of str){
//         res = i + res;
//     }
//     return res;
// }

// console.log(reverse(str));

//3. palindrome string

// str1 = "abbbcbbba";
// str2 = "abcsfsdf";

// const palid = (str) =>{
//   let n = Math.floor(str.length/2);
//   let a = 0;
//   let b = str.length-1;
//   while(a <= n){
//       if(str[a] !== str[b]){
//           return false;
//       }
//       a++;
//       b--;
//   }
//   return true;
// }

// console.log(palid(str1));

//4. implement strstr

// const str1 = "GeeksForGeeks";
// const str2 = "For";

// const imple = (str1, str2) =>{
//     for(let i = 0; i<str1.length - str2.length; i++){
//         if(str1.substring(i, i+str2.length) === str2){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(imple(str1, str2));

//5. anagram

// arr1 = "geeksforgeeks";
// arr2 = "forgeeksgeeks";

// const anagram = (arr1, arr2) =>{
//     let res = new Array(26);
//     res.fill(0);
//     for(let i = 0;i<arr1.length;i++){
//         res[arr1[i].charCodeAt()-"a".charCodeAt()]++;
//     }
//     for(let i =0;i<arr2.length; i++){
//         res[arr2[i].charCodeAt()-"a".charCodeAt()]--;
//         if(res[arr2[i].charCodeAt()-"a".charCodeAt()] < 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(anagram(arr1, arr2));

//6. longest palindrome




//6. check if string is rotated 



//2. valid an IP