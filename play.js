const arr = [2, 1, 4,6,-1];
let arr1 = [9,9,9,6,4,2];
let arr2 = [2,4,1,4,6,3,5,7,1];
let arr3 = [1,2,4,6,8,12];
const arr4 = [2, 6, 1, 9, 4, 5, 3, 11,15,64,0];
const arr5 = [-1, 2, 1, 0];
const coin = [2,3,7];

let result = [{"text":"55 法务类","value":"55"},
              {"text":"63 成本类","value":"63"},
              {"text":"63 成本类","value":"61"},
              {"text":"64 财务类","value":"61"},
              {"text":"67 战投类","value":"61"}]


              
Array.prototype.myFilter = function(myFunc){
   let myArr = [];
   for(let i = 0; i<arr.length; i++){
      const result = myFunc(arr[i], i, arr);
      myArr.push(result);
   }
   return myArr;
}

console.log(arr.myFilter(one => one % 2 ));


