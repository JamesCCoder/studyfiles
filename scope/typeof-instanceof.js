// 1. typeof (返回 String)

//   1. 用于 primitive
//      返回string，表示数据类型

//   2. 用于 object
//      返回 “object”

//   3. typeof null 

//        object


// 缺点: 除了primitive，一律显示 object，不准确

// 2. instanceof（返回 true/false）

//    1. 左侧 primitive， 则一律 false
//    2. 左侧 为 object， 右侧可以为 object  =>（true）
//                       也可以为 具体的类型 Array



//  1. Boolean(true)         primitive true
//  2. new Boolean(true)     object true


// 3. ().constructor

//   (1).constructor === Number      true
//   ([]).constructor === Array      true
//   ([]).constructor === Object     false
//   ({}).constructor === Object     true