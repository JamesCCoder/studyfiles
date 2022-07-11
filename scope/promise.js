// // http://www.sheep11.com/article-nDCDPcdec7m52ySE

// // promise 的状态 

// // new: pending
// // resolve: resolve
// // reject: reject


// // promise 的执行顺序



// 1. 所有在 promise 之外的 console.log  和   new Promise 之中的 console.log
//    由上到下，按顺序


// 2. promise 中 then 的内容
//    由上到下，按顺序
//    （如果没有出现 resolve，则 then 中内容不会执行）
//    （如果 then 中内容来自于上一级，则为 resolve 中的内容）


// 3. setTimeout 中的内容
//    1. 先执行 普通 console
//    2. 再执行 resolve 中的内容 (1)


// 4. 两个 setTimeout 并行的情况

//    1. timer 时间越短，越靠前执行
//    2. timer 时间相同时，
//       1，先执行 console 和 then
//       2. 再执行其他的settimeout   (2)


// 5. 微任务（then）和宏任务（setTimeout）并行的情况：（3）

//    1. 先执行微任务、宏任务之外的任务
//    2. 微任务中套嵌宏任务，则执行微任务中的其他任务，把宏任务放入延迟列表（等所有微任务执行完再执行）
//    3. 宏任务中套嵌微任务，则执行其他任务，再执行该微任务


// 6.  resolve 同一个function里只执行一次，
//     如果执行的是 resolve，则关联至 then
//     如果执行的是 reject，则关联至 catch

// 7. catch 后的 then 会继续执行
// 8. then 遇到 catch 后会跳过，继续执行下一个 then
// 9. 每一个被执行的 then/catch 里的return 就是下一个 then 里的 变量
// 10. then 中 return new Error 不会被catch 捕获，会直接执行下一个 then
//     如果需要被 catch 捕获，需要执行 throw new Error 或者 return Promise.reject 
// 11. return 不能返回 promise 本身，否则会报错
// 12. then 中的参数应当是 function， 否则会发生值穿透（4）
// 13. then 中如果有两个参数，res、err，则传来的reject 会进入err，而不是之后的catch
// 14. 两个 then 之间的 finally 一定会执行，不传值，不接值，传来的数值会传递到之后的 then（5）

// 1----------------------------

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });
// promise.then((res) => {
//   console.log(res);
// });
// console.log(4);

// 1
// 2
// 4
// "timerStart"
// "timerEnd"
// "success"

// 2----------------------------

// setTimeout(() => {
//   console.log('timer1');
//   setTimeout(() => {
//     console.log('timer3')
//   }, 0)
// }, 0)
// setTimeout(() => {
//   console.log('timer2')
// }, 0)
// console.log('start')

// 'start'
// 'timer1'
// 'timer2'
// 'timer3'

// setTimeout(() => {
//   console.log('timer1');
//   Promise.resolve().then(() => {
//     console.log('promise')
//   })
// }, 0)
// setTimeout(() => {
//   console.log('timer2')
// }, 0)
// console.log('start')

// 'start'
// 'timer1'
// 'promise'
// 'timer2'


// 3------------------------------

// Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });
// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)
// console.log('start');

// 'start'
// 'promise1'
// 'timer1'
// 'promise2'
// 'timer2'

// 4-------------------------------

// Promise.resolve(1)
//   .then(2)                          ---- number，穿透(value will be ommited)
//   .then(Promise.resolve(3))         ---- obj，穿透
//   .then(console.log)                ---- function get到了数值

//   1


// Promise.resolve(1)                 
// .then(() => 2)                        1 --- 2
// .then(3)
// .then((value) => value * 3)           2 --- 6
// .then(Promise.resolve(4))
// .then(console.log)

// 5---------------------------------

// Promise.resolve(1)
//   .then((val) => {
//     console.log(val); // 1
//     return val + 1;
//   })
//   .then((val) => {
//     console.log(val);  // 2
//   })
//   .then((val) => {
//     console.log(val); // undefined, because last handler returned nothing
//     return Promise.resolve(3).then((val) => {
//       console.log(val); // 3
//     });
//   })
//   .then((val) => {
//     console.log(val); // undefined, because last handler returned nothing
//     return Promise.reject(4);
//   })
//   .catch((val) => {
//     console.log(val); // 4
//     return 100;
//   })
//   /* 
//   1. `finally` doesn't receive any argument. Thus finally handler's all parameter values are undefined always.
//   2. `finally` doesn't return any of its own. If we return something then it will be ignored. It will return resolved value of `then/catch` on which it was called. However, there is an exception. If finally rejects then `finally` return value will be considered instead of `then/catch/promise` on which it was called.
//   */
//   .finally((val) => {
//     console.log(val); // undefined, because finally returns no parameter
//     return 10;
//   })
//   .then((val) => {
//     console.log(val); // undefined, because finally return value of promise on which it was called. It was called on catch which return undefined.
//   });

// 1
// 2
// undefined
// 3
// undefined
// 4
// undefined
// undefined


// 6-------------------------------------------