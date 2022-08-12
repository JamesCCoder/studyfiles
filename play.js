const str = "abcdefg";

const shift = (str, m, n) =>{
   let arr = str.split("");
   for(let i = 0; i<n; i++){
       let char = arr.pop();
       arr.unshift(char);
   }

   for(let i = 0; i<m; i++){
       let char = arr.shift();
       arr.push(char);
   }
   return arr.join("");
}

console.log(shift(str, 4, 2));