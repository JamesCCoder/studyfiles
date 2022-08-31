let s1 = "leetcode";
let s2 = "aabb";

var firstUniqChar = function(s) {

    

    
};

console.log(firstUniqChar(s1));
console.log(firstUniqChar(s2));



































// var firstUniqChar = function(s) {
//     let myMap = new Map();
//     for(let i = 0; i<s.length; i++){
//         if(myMap.has(s[i])){
//             myMap.set(s[i], myMap.get(s[i]) + 1);
//         }else{
//             myMap.set(s[i], 1);
//         }
//     }
//     for(let i = 0; i<s.length; i++){
//         if(myMap.get(s[i]) === 1){
//             return i;
//         }
//     }
//     return -1;
// };

// console.log(firstUniqChar(s1));
// console.log(firstUniqChar(s2));