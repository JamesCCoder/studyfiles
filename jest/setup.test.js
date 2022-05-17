let animals = ["a", "b", "c"];

beforeEach(() => {
    animals = ["a", "b", "c"];
})

describe("setup test", () => {
    it("some add test", () => {
        animals.push("d");
        expect(animals[animals.length - 1]).toBe("d");
    })
})