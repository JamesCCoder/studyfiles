const sum = () =>{
   let a = 1;
   if(a === 0){
       return 123;
   }else{
       throw new Error("this is wrong");
   }
}

module.exports = sum;