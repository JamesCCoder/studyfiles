const temperature = [5, 4, 7, -6, -2, 0, "error", 6, 123];

const get_Max_and_min = (temp) => {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    let curTemp = temp[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  return `${max}, ${min}`;
};

console.log(get_Max_and_min(temperature));
