const arr = [2, 1, 4,6,-1];



let result = [{"text":"55 法务类","value":"55"},
              {"text":"63 成本类","value":"63"},
              {"text":"63 成本类","value":"61"},
              {"text":"64 财务类","value":"61"},
              {"text":"67 战投类","value":"61"}]



const arr1 = ["flower","flow","flight"];


var minPathSum = (arr) => {
   arr.sort((a,b) => a - b);
   let n = Math.min(arr[0].length, arr[arr.length-1].length);
   let i = 0;
   while(i < n && arr[0][i] == arr[arr.length - 1][i]){
         i++;
   }
   let res = arr[0].substring(0, i);
   return res;
}

console.log(minPathSum(arr1));








