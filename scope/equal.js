//https://bigfrontend.dev/quiz

// ===

// 1. 不同类型  ->  false
// 2. 相同类型

//    1. primitive  数值相同  --->  true

//                  例外:   1. NaN === NaN         false
//                          2. +0 === -0           true     


//    2. reference  地址相同  --->  true       a = []   b = a
//                  仅数值相同 ----> false      a = []   b = []



// var a = {
//     a:1
// }

// var b = {
//     a :1
// }

// console.log(a == b);





// ==

// 1. primitive

//    两边统一转化为 Number，再进行计算。

// 2. null / undefined

//    null / undefined 与任何其他数值相比都为 false，
//    仅互相比时为true


// 3. obj 

//    1. obj 与 Number

//       将 obj 转化为 Number

//    2. obj 与 String

//       将 obj 转化为 String

//    3. obj 与 boolean

    //   两边同时转化为 Number


//4. 
//     Boolean(true)         primitive true

//     new Boolean(true)     object true

//     区别： obj 之间 == 肯定返回false，因为是不同的object
//           obj 与 primitive   返回 boolean 与 primitive 比较
//           

// 5. 特殊

//    null >= 0    true
//    null <= 0    true

// 6. 连等

//    2.0 == "2" == true == "1"
//    ===>    2 == 2 == true == "1"
//    ===>    true == true == "1"
//    ===>    true == "1"
//    ===>    true




// Object.is(a, b)

// 和 === 只有两点不同

// 1. +0 -0        false
// 2. NaN NaN      true