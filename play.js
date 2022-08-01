const arr = [1,2,3,[4,5,[6,7]]];

const dispatch = (arr, n) =>{
  if(n <= 0){
    return arr;
  }

    return arr.reduce((pre, cur) =>{
       if(Array.isArray(cur)){
         return pre.concat(dispatch(cur, n - 1));
       }
       return pre.concat(cur);
    },[])
}

console.log(dispatch(arr, 1));