// input

//   // output
//   ({ name: "Brian", age: 45 }, { name: "Dan", age: 78 })
// ];

arr = [
  { name: "Abbey", age: 25 },
  { name: "Brian", age: 45 },
  { name: "Colin", age: 25 },
  { name: "Dan", age: 78 },
];

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
    if (sign == 0) {
      arr_1.splice(index[i], 1);
    } else {
      arr_1.splice(index[i] - sign, 1);
    }
    sign++;
  }
  return arr_1;
};

console.log(abc(arr));
