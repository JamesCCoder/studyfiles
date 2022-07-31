const arr = [1,2,3,[4,5,[6,7]]];

const dispatch = (arr, n) =>{
    let res  = [];
   for(let i = 0; i<arr.length; i++){
       let item = arr[i];
       if(Array.isArray(item)){
          res.push(...dispatch(item, n - 1));
       }else{
           res.push(item);
       }
   }
   return res;
}

console.log(dispatch(arr, 1));