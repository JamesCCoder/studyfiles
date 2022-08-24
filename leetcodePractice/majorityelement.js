// element that appear more than 2/n times

const arr = [2,2,1,1,1,2,2];

const major = (arr) =>{
    let myMap = new Map();
    for(let i = 0; i<arr.length; i++){
        if(myMap.has(arr[i])){
          myMap.set(arr[i],  myMap.get(arr[i] + 1));
          if(myMap.get(arr[i]) > arr.length / 2){
             return arr[i];
          }
        }else{
          myMap.set(arr[i], 1);
        }
        
    }
}

console.log(major(arr));