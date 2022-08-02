const arr = [1,2,3,4,5,6];
const sum = 10;

const twoSum = (arr, sum) =>{
   let res = [];
   let myMap = new Map();
   for(let i = 0; i<arr.length; i++){
      if(myMap.has(sum-arr[i])){
        res.push(myMap.get(sum - arr[i]));  
        res.push(i);
        break;
      }
      myMap.set(arr[i], i);
   }
   return res;
}



console.log(twoSum(arr, sum));