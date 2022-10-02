const sum = require("../sum");


test("obj assignment", async () =>{
   const getData = await sum();
   expect(getData).toContain("est et quae odit qui non");
})