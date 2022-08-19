
let mySort = require("./mySort");

test("this is a simply test for mySort", () =>{
    expect(mySort([3,2,1])).toEqual([1,2,3]);
})