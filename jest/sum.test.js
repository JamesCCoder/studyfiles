const sum = require("./sum");


test("obj assignment", () =>{
    expect(() => sum()).not.toEqual(123);
})