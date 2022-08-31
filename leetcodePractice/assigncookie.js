// https://leetcode.com/problems/assign-cookies/

s1 = [1,2,3];
t1 = [1,1];

s2 = [1,2];
t2 = [1,2,3];


let findCookie = (s, t) =>{

    
}

console.log(findCookie(s1, t1));
console.log(findCookie(s2, t2));






























// let findCookie = (s, t) =>{
//    let res = 0;
//    s.sort((a, b) => a - b);
//    t.sort((a, b) => a - b);
//    let i = 0;
//    for(let n of t){
//        if(n >= s[i]){
//            res++;
//            i++;
//        }
//    }
//    return res;
// }

// console.log(findCookie(s1, t1));
// console.log(findCookie(s2, t2));