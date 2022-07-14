function createBase(a){
  return function(b){
    a = a + b;
    console.log(a);
  }
    
}

let addNum = createBase(6);
addNum(10);
addNum(21);
addNum(10);


////////////////////////////////////////
//  利用 closure 进行数据存储 

function createBase(a){
  return function(b){
    let sum = a + b;
    console.log(sum);
  }
    
}

let addNum = createBase(6);
addNum(10);
addNum(21);
addNum(10);

///////////////////////////////////////
// closure 朝上边找
var a = 10;
a=100;

function outerFunc(a) {
  function inner() {
    var b = 20;
    console.log(a + b);
  }

  return inner;
}

var func = outerFunc(a);

a = 30;

func();