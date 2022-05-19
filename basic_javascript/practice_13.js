const temp_1 = [17, 21, 23];
const temp_2 = [12, 5, -5, 0, 4];

const res = (temp) => {
  let result = "";
  for (let i = 0; i < temp.length; i++) {
    result += ` ${temp[i]} degree in ${i + 1} days,`;
  }
  return result;
};

console.log(res(temp_1));
console.log(res(temp_2));
