s1 = "anagram", t1 = "nagaram";
s2 = "rat", t2 = "car";

const anagram = (str1, str2) =>{
  
    

    
}

console.log(anagram(s1, t1));
console.log(anagram(s2, t2));


































// const anagram = (str1, str2) =>{
//     let myMap = new Map();
//     for(let i = 0; i<str1.length; i++){
//         if(myMap.has(str1[i])){
//             myMap.set(str1[i], myMap.get(str1[i])+ 1);
//         }else{
//             myMap.set(str1[i], 1);
//         }
//     }
//     for(let i = 0; i<str1.length; i++){
//         if(myMap.has(str2[i])){
//             myMap.set(str2[i], myMap.get(str2[i]) - 1);
//         }else{
//             myMap.set(str2[i], -1);
//         }
//     }
//     console.log(myMap);
//     for(let i of str1){
//         if(myMap.get(i) !== 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(anagram(s1, t1));
// console.log(anagram(s2, t2));

