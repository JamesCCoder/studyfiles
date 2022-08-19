const arr = [1,2,3,4,213,[23,[321,[234]]],5];

const myFlat = (arr) => {
    return arr.reduce((pre, cur) =>{
        return pre.concat(Array.isArray(cur) ? myFlat(cur) : cur);
        
    },[])
}

console.log(myFlat(arr));

