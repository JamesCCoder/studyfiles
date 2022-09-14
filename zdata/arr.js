// input

// arr = [
//   { name: "Abbey", age: 25 },
//   { name: "Brian", age: 45 },
//   { name: "Colin", age: 25 },
//   { name: "Dan", age: 78 },
// ];

//   // output
//   [{ name: "Brian", age: 45 }, { name: "Dan", age: 78 }];

arr = [1,2,2,3,4,4,5];

const remove = (arr) =>{
    const mySet = new Set();
    for(let i of arr){
        mySet.add(i);
    }
    return Array.from(mySet);
}

console.log(remove(arr));