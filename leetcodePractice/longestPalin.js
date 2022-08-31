const str = "abccccdd";
//calculate the length of longestpalindrome that created by str

var longestPalindrome = function(s) {

    
}

console.log(longestPalindrome(str));


























// var longestPalindrome = function(s) {
//     let res = 0;
//     let mySet = new Set();
//     for(let i of s){
//         if(mySet.has(i)){
//             res += 2;
//             mySet.delete(i);
//         }else{
//             mySet.add(i);
//         }
//     }
//     return res + (mySet.size > 0 ? 1 : 0)
// }