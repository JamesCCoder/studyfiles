input = [{"a":1},{"b":2},{"c":3}];

//output = ["a",1,"b",2,"c",3];


const change = (input) =>{
  let res = [];
  for(let i of input){
    // res.push(Object.keys(i)[0]);
    // res.push(Object.values(i)[0]);
    res.push(Object.entries(i).flat());
  }
  return res.flat();
}

console.log(change(input));