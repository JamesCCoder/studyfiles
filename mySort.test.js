
const mySort = require("./mySort");

test("This is a test for mySort", () =>{
    expect(mySort([1,2,5,3])).toEqual([5,3,2,1]);
})