let arr = [1,2,3,2,3];

const duplicate = (arr) =>{

    let res = [];
    let mySet = new Set();
    for(let i = 0; i<arr.length; i++){
        if(mySet.has(arr[i])){
            res.push(arr[i]);
        }
        mySet.add(arr[i]);
    }
    return res;
}

console.log(duplicate(arr));