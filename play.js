const arr = [2, 1, 4,6,-1];

let arr3 = [1,2,4,6,8,12];
const arr4 = [2, 6, 1, 9, 4, 5, 3, 11,15,64,0];
const arr5 = [-1, 2, 1, 0];
const coin = [2,3,7];
const arr6 = [[1,5],[3,7],[4,6],[6,8],[10,12],[12,15]];
const arr7 = [[1,3],[4,6],[8,9],[11,13]];
const arr8 = [3, 4, 1, 1, 6];

let result = [{"text":"55 法务类","value":"55"},
              {"text":"63 成本类","value":"63"},
              {"text":"63 成本类","value":"61"},
              {"text":"64 财务类","value":"61"},
              {"text":"67 战投类","value":"61"}]


let str1 = "abdbca";

const getStr = (str) =>{
   let long = 0;
   let res;
   for(let i = 0; i<str.length; i++){
      for(let j = i + 1; j<str.length; j++){
         if(palin(str.substring(i, j+1))){
            if(j - i + 1 > long){
               long = j - i + 1;
               res = str.substring(i, j+1);
            }
         }
      }
   }

   
   return res;
}

const palin = (str) =>{
   let i = 0;
   let j = str.length - 1;
   while(i <= j){
      if(str[i] !== str[j]){
         return false;
      }
      i++;
      j--
   }
   return true;
}
           
console.log(getStr(str1));




