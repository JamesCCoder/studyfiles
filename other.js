const str = [1,2,3,4,5];
const arr = [{name: "aa"}, {name:"bb"}, {name:"cc"}, {name:"dd"}];
const arr1 = ["aa", "bb", "cc", "dd"];

const obj = {...str};
console.log(obj);

const obj1 = Object.assign({},str)
console.log(obj1);

const obj2 = str.reduce((a,v) => ({...a, [0]:v}),{});
console.log(obj2);


const res = arr.map((one) =>{
    return {
        id: Math.random(),
        ...one,
    }
});
console.log(res);

const res1 = arr1.map((two) => {
    return {
        id:Math.random(),
        value: two,
    };
})

console.log(res1);