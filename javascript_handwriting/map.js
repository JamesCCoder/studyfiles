let arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (myFunc) {
  const myArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = myFunc(arr[i], i, arr);
    myArr.push(result);
  }
  return myArr;
};

console.log(arr.myMap((x) => x * 2));