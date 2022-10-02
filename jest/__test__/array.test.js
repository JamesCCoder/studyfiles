let animals = [];

beforeEach(() =>{
    animals = ["a", "b", "c", "d"];
})

it("add one animal", () =>{
    animals.push("e");
    expect(animals[animals.length -1]).toMatch(/e/);
})

it("add another animal", () =>{
    animals.push("f");
    expect(animals[animals.length - 1]).toMatch(/f/);
})

it.only("original length of arrat", () =>{
    expect(animals.length).toBe(4);
})