//  1. function 用 varible 定义， 则左边会发生 hoisting
//  2. function 内有return ，则可以看作 varible

// 3. function 如果不用varible，则会整体发生hoisting

// func2() 

// function func2() {
//   console.log(2)
// }

// 同名的 varible 和 function 同时发生 hoisting，
// 则 function 在 varible 之上




//4. naming scope

//let a =  function b(){
//   console.log(typeof b);                  function
//   console.log(typeof a);                  function
//}

//console.log(typeof(a))                      function
//console.log(typeof(b))                      undefined

//a();