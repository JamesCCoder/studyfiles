const count = require("./count");

test("count duplicate in an arrat", () =>{
    expect(count([1,2,3,1,2])).toEqual([1,2]);
})