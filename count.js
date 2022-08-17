// let arr = [ 0, 4, 3, 2, 7, 8, 2, 3, 1 ];


let count = (arr) =>{
   let mySet = new Set();
   let res = [];

   for(let i = 0; i<arr.length; i++){
    if(mySet.has(arr[i])){
        res.push(arr[i]);
    }   
    mySet.add(arr[i]);
   }
   return res;
}
     
module.exports = count;
