const arr = "abcabcabcabc";


const reverse = (arr, n) =>{
   let res = "";
   let num = 0;
   for(let i = 0; i<arr.length; i++){
       num++;
       if(num % n === 0){
           res = rev(res) + arr.substring(i - n, i);
       }
       
       console.log(num);
   }
   for(let i = num; i<arr.length; i++){
       res = res + arr[i];
   }
   return res;
}

const rev = (arr) =>{
   let res = "";
   for(let i of arr){
       res = i + res;
   }
   return res;
}


console.log(reverse(arr, 2));
console.log(reverse(arr,3));