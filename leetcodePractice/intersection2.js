arr1 = [1,2,2,1];
arr2 = [2,2];

const intersection = (arr1,arr2) =>{

    


    
}

console.log(intersection(arr1, arr2));





















// const intersection = (arr1,arr2) =>{
//     let res = [];
//     let myMap = new Map();
//     for(let i = 0; i<arr1.length; i++){
//        if(myMap.has(arr1[i])){
//            myMap.set(arr1[i], myMap.get(arr1[i]) + 1);
//        }else{
//            myMap.set(arr1[i], 1);
//        }
//     }

//     for(let i = 0; i<arr2.length;i++){
//         if(myMap.has(arr2[i])){
//             myMap.set(arr2[i], myMap.get(arr2[i])-1);
//             if(myMap.get(arr2[i]) >=0){
//                 res.push(arr2[i]);
//             }
//         }
//     }
//     return res;
// }

// console.log(intersection(arr1, arr2));