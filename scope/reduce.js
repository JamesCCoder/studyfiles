let a = ["a","b","c","d","a"];

let result = a.reduce((all, name) => {
     if(name in all){
         all[name]++;
     }else{
         all[name] = 1;
     }
     return all;
},{});

console.log(result)


let a = [1,2,3,4,5];

let res = a.reduce((sum, num) =>{
    return sum + num;
},0)

console.log(res);


let a = [
    {name: "a", num:1},
    {name: "b", num:2},
    {name: "c", num:3}
]

let res = a.reduce((sum, cur) =>{
     return sum + cur.num;
},0)

console.log(res);