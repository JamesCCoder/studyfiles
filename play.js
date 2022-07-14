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

