

const abc = (arr) => {
  let arr_1 = arr;
  let index = [];
  arr.forEach((a, i) => {
    let count = 0;
    arr_1.forEach((b, j) => {
      if (arr[i].name == arr_1[j].name || arr[i].age == arr_1[j].age) {
        count++;
      }
    });
    console.log(i, count);
    if (count > 1) {
      index.push(i);
    }
  });
  let sign = 0;
  for (let i = 0; i < index.length; i++) {
    arr_1.splice(index[i] - sign, 1);
    sign++;
  }
  return arr_1;
};

console.log(abc(arr));
