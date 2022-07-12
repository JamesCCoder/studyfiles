// a = 1;                        function 之外的部分也总是 global varible， 因为closure 的原因总能被 function 使用
// ** let a = 1  const a = 1


// function print(){
//   console.log(a);             1
//   a = 2;
//   console.log(a);             2
// }

// print();
// console.log(a);               2

// “a = 1” 总是 global varible

// --------------------------------------------------------------

// let a = 1;                   

// function print(){
//   console.log(a);              undefined
//   var a = 2;                   一旦 function 中的 varible 由 var/let/const 定义，则functino 中的变量变为functinal scope
//   console.log(a);              2         由于 hoisting 的原因结果为error或者undefined
// }

// print(a);                        
// console.log(a);                1      global variable的影响范围被function varible “屏蔽”


//-----------------------------------------------------------------
 
// a = 1;

// function add(){   
//   console.log(a);                         1   没有function varible，global variable“畅行无阻”
//   a = 0;
//   console.log(a);                         0
// }
// add();                                    invoke了之后，对window进行了赋值
// console.log(a);                           0


// function add(){          
//   a = 0;
//   console.log(a);                            0         
// }
// add();                                       invoke之后对window进行了赋值
// console.log(a);                              0


// function add(){          
//   a = 0;                                  
// }
// console.log(a);                            not define   （没有赋值过程）       


// -------------------------------------------------


// function add(){                   
//   let count = 0;
//   count = 100;
//   function plus(){
//     count++;
//     return count;
//   }
//   return plus;
// }

// var a = add();
// a();
// a();

// console.log(a());

//          vvvvvvvvsssssssss

// a = 0;

// function add(){
//   a++;
//   return a;
// }


// add();
// add();
// add();
// add();

// console.log(a);


