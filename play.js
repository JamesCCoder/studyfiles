
const arr = [1,2,3,4,5,6,7,8,9,10];

for(let i = 1; i<arr.length; i++){
    let random = Math.floor(Math.random()*(i+1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
}

console.log(arr);