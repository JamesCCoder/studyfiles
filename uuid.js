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

const solution = (first, second) =>{
   let firstMap = new Map();
   let secondMap = new Map();
   let idSet = new Set();
   for(let i of first){
      firstMap.set(i.uuid, i.name);
      idSet.add(i.uuid);
   }
   for(let i of second){
       secondMap.set(i.uuid, i.role);
       idSet.add(i.uuid);
   }
   let res = [];
   for(let i of idSet){
      let temp = {};
      temp.uuid = i;
      temp.name = firstMap.get(i);
      temp.role = secondMap.get(i);
      temp.name = temp.name === undefined ? null : temp.name;
      temp.role = temp.role === undefined ? null : temp.role;
      res.push(temp);
   }
   return res.sort((a,b) => a.uuid - b.uuid);
}

console.log(solution(first, second));