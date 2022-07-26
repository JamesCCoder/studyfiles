const arr1 = "abcba";
const arr2 = "abccc";
const arr3 = "abcbaa";


const palin = (arr) =>{
   
}


console.log(palin(arr1));
console.log(palin(arr2));
console.log(palin(arr3));




















// const palin = (arr) =>{
//    let i = 0;
//    let j = arr.length - 1;
//    while(i <= j){
//        if(arr[i] !== arr[j]){
//            return isPalin(arr, i+1, j) || isPalin(arr, i, j - 1);
//        }
//        i++;
//        j--;
//    }
//    return true;
// }


// const isPalin = (arr, m, n) =>{
//    while(m <= n){
//        if(arr[m] !== arr[n]){
//            return false;
//        }
//        m++;
//        n--;
//    }
//    return true;
// }


// console.log(palin(arr1));
// console.log(palin(arr2));
// console.log(palin(arr3));