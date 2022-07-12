//   default binding (global binding)-------------------------------

// function a(){
//     console.log(this);         // window
// }
// a();

// function b(){
//     "use strict"          
//     console.log(this);         // under "use strict", undefined
// }
// b();


// implicit binding (in obj) ---------------------------------

// let a = 12;

// let obj = {
//     a : 10,
//     fn: function(){
//         return this.a;
//     }
// }
// console.log(obj.fn());



// explicit binding --------------------------------------------

// bind, apply, call                -----不传参数则指向window


// new




//-----------spicificity ------------

// new > explicit > implicit > default

// function foo (a) {              implicit
//     console.log(this.a)
// }
// const obj1 = {
//     a: 1,
//     foo: foo
// }
// const obj2 = {
//     a: 2,
//     foo: foo
// }
// obj1.foo(obj2)                   1
// obj2.foo(obj1)                   2

// function foo (a) {               explicit
//     console.log(this.a)
// }
// const obj1 = {
//     a: 1,
//     foo: foo
// }
// const obj2 = {
//     a: 2,
//     foo: foo
// }
// obj1.foo.call(obj2)               2
// obj2.foo.call(obj1)               1

// --------------  this is arrow

// var name = 'window'; 

// var A = {
//    name: 'A',
//    sayHello: () => {
//       console.log(this.name)                 arrow function 的 arrow 指向其外层包裹的function
//    }
// }

// A.sayHello()                            window

//-----------------------------------将 arrow 永远指向 A
// var name = 'window'; 

// var A = {
//    name: 'A',
//    sayHello: function(){
//       var s = () => console.log(this.name)
//       return s//返回箭头函数s
//    }
// }

// var sayHello = A.sayHello();
// sayHello();// 输出A 

// var B = {
//    name: 'B';
// }

// sayHello.call(B); //还是A
// sayHello.call();


/// -----------------this in array.forEach

// var obj = {
//   arr: [1]
// }
// obj.arr.forEach(function() {
//   console.log(this)                         window
// })


/// --------------------this is setTimeout and setTimeinterval

// var name = 'hello'
// var obj = {
//   name: 'world',
//   hello: function() {
//     setTimeout(function() {
//       console.log(this.name)                  this is for window
//     })
//   }
// }
// obj.hello()                                    hello

