let arr = [1, 2, 3, 4, 5];

function myMap(arr, myFunc) {
  const myArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = myFunc(arr[i], i, arr);
    myArr.push(result);
  }
  return myArr;
}

console.log(myMap(arr, (num) => num + 2));

function myMap(arr, myFunc) {
  const myArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = myFunc(arr[i], i, arr);
    if (result) {
      myArr.push(result);
    }
  }
  return myArr;
}
