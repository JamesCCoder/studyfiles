// reduce 常见四种用法


//1. 累加

arr = [1,2,3,4,5];

const add = (arr) =>{

}

console.log(add(arr));


// 2. flat an array

arr1 = [1,2,3,[4,5,6,[7,8,9]]];

const flat = (arr) =>{

}

console.log(flat(arr1, 1));

//3. 统计个数

arr2 = ["a", "b", "a", "a"];

const collection = (arr) =>{

}

console.log(collection(arr2));

//4. 去重

arr3 = [1,2,3,2,1,4,5,6,7,8,9];

const remove = (arr) =>{

    
}

console.log(remove(arr3));


















//1. 累加

// arr = [1,2,3,4,5];

// const add = (arr) =>{
//    return arr.reduce((pre, cur) => {
//        return pre + cur;
//    }, 0);
// }

// console.log(add(arr));


// 2. flat an array

// arr1 = [1,2,3,[4,5,6,[7,8,9]]];

// const flat = (arr, n) =>{
//     if(n <= 0) return arr;
//    return arr.reduce((pre, cur) =>{
//        return pre.concat(Array.isArray(cur) ? flat(cur, n - 1) : cur);
//    }, [])
// }

// console.log(flat(arr1, 1));


//3. 统计个数

// arr2 = ["a", "b", "a", "a"];

// const collection = (arr) =>{
//     return arr.reduce((allNames, name) =>{
//         if(name in allNames){
//             allNames[name]++;
//         }else{
//             allNames[name] = 1;
//         }
//         return allNames;
//     },{})
// }

// console.log(collection(arr2));


//4. 去重

// arr3 = [1,2,3,2,1,4,5,6,7,8,9];

// const remove = (arr) =>{
//    return arr.reduce((res, num) =>{
//        if(res.indexOf(num) === -1){
//            res.push(num);
//        }
//        return res;
//    },[])
// }

// console.log(remove(arr3));