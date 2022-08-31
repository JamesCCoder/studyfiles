let ransomNote = "a";
let magazine = "b";

var canConstruct = function(ransomNote, magazine) {
   

    
};


console.log(canConstruct(ransomNote,magazine));



























// var canConstruct = function(ransomNote, magazine) {
//     let myMap = new Map();
//     for(let i = 0; i<magazine.length; i++){
//         if(myMap.has(magazine[i])){
//             myMap.set(magazine[i],myMap.get(magazine[i]) + 1);
//         }else{
//             myMap.set(magazine[i],1);
//         }
//     }
//     for(let i = 0; i<ransomNote.length; i++){
//         if(myMap.has(ransomNote[i])){
//             myMap.set(ransomNote[i], myMap.get(ransomNote[i]) - 1);
//         }else{
//             myMap.set(ransomNote[i], -1);
//         }
//     }
//     console.log(myMap);
//     for(let i of magazine){
//         if(myMap.get(i) < 0){
//             return false;
//         }
//     }
//     for(let i of ransomNote){
//         if(myMap.get(i) < 0){
//             return false;
//         }
//     }
//     return true;
// };


// console.log(canConstruct(ransomNote,magazine));