arr = [1,2,3];

let mySort = require("./mySort");

it("this is a common test for sorting an array", () =>{
    expect(mySort(arr)).toEqual([3,2,1]);
})