 arr = [1,5,6,7,2,4,6,1,5];


 const duplicate = (arr) =>{
     const mySet = new Set();
     const res = [];
     for(let i of arr){
         if(mySet.has(i)){
             res.push(i);
         }
         mySet.add(i);
     }
     return res;
 }

module.exports = duplicate;