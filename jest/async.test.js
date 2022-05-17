const fetchData = require("./async.js");

it("should return name", async () => {
    const todo = await fetchData(1);
    expect(todo.name).toBe("Luke Skywalker");
})