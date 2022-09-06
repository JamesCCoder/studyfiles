let duplicate = require("./duplicate");

 arr = [1,5,6,7,2,4,6,1,5];

 it("this is a simply test for duplicate module", () =>{
     expect(duplicate(arr)).toEqual([6,1,5]);
 }) 