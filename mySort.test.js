const arr = [1,2,1,23,123,121,12,123,141,124];

let mySort = require("./mySort.js");

test("this is a test for mySort", () => {
   expect(mySort(arr)).toEqual([
    1,   1,   2,  12,  23,
  121, 123, 123, 124, 141
]);
})