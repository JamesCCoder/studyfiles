let first = [
  { uuid: 2, name: "Darling" },
  { uuid: 3, name: "Cry-Baby" },
  { uuid: 4, name: "Snitch" },
  { uuid: 5, name: "Pawn" }
];
let second = [
  { uuid: 1, role: "admin" },
  { uuid: 2, role: "contributor" },
  { uuid: 3, role: "owner" },
  { uuid: 4, role: "contributor" }
];

//OUTPUT
//[
// {uuid:1, name: null, role: 'admin'},
// {uuid:2, name: 'Darling', role: 'contributor'},
// {uuid:3, name: 'Cry-Baby', role: 'owner'},
// {uuid:4, name: 'Snitch', role: 'contributor'},
// {uuid:5, name: 'Pawn', role: null}
//]
let third = [];

const combination = (arr1, arr2) => {
     let res = [];
     let id = new Set();
     for(let i = 0; i<arr1.length; i++){
         for(let j = 0; j<arr2.length; j++){
             if(arr1[i].uuid === arr2[j].uuid){
                 id.add(arr1[i].uuid);
                 let arr3 = {
                     uuid:arr1[i].uuid,
                     name:arr1[i].name,
                     role:arr2[j].role,
                 }
                 res.push(arr3);
             }
         }
     }
     console.log(id);
     for(let i =0; i<arr1.length; i++){
         for(let j = 0; j<res.length; j++){
             if(arr1[i].uuid !== res[j].uuid && !id.has(arr1[i].uuid)){
                 let a = {
                     uuid:arr1[i].uuid,
                     name:arr1[i].name,
                     role:null,
                 }
                   res.push(a);
                   break;
             }
          
         }
       
     }
    for(let i =0; i<arr2.length; i++){
         for(let j = 0; j<res.length; j++){
             if(arr2[i].uuid !== res[j].uuid && !id.has(arr2[i].uuid)){
                 let b = {
                     uuid:arr2[i].uuid,
                     name:null,
                     role:arr2[i].role,
                 }
                   res.push(b);
                   break;
             }
          
         }
       
     }
     
     return res;
}

console.log(combination(first, second));