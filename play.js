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

function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatten([1, 2, 3, [2, 3, [5, 6]]]));
