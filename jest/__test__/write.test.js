let write = require("../write");

test("should return print value", () =>{
    const value = write();
    expect(value).toEqual("try");
})