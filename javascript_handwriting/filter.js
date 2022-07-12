Array.prototype.myFilter = function (myFunc) {
  const myArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = myFunc(arr[i], i, arr);
    if (result) {
      myArr.push(arr[i]);
    }
  }
  return myArr;
};

console.log(arr.myFilter((x) => x % 2 === 0));