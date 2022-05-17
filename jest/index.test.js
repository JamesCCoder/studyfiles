const sum = require("./index.js");

describe("example tests", () => {
    it("should return a + b", () => {
        const result = sum(1, 2);
        const res = sum (0.1, 0.2);
        expect(result).toBe(3);
        expect(result).toBeGreaterThan(2);
        expect(result).toBeGreaterThanOrEqual(3);
        expect(result).toBeLessThan(4);
        expect(result).toBeLessThanOrEqual(3);
        expect(res).toBeCloseTo(0.3);
    })

    it("compare object and array", () => {
        const ob = {1:1,2:2,3:3};
        const arr = [1,2,3,"4"];
        expect(ob).toEqual({1:1,2:2,3:3});
        expect(arr).toEqual([1,2,3,"4"]);
        expect(arr).toContain(1);
        expect(arr).toContain("4");
        
    })

    it("true, false, null, undefined", () => {
        const tr = true;
        const fa = false;
        const nu = null;
        const und = undefined;
        expect(tr).toBeTruthy();
        expect(fa).toBeFalsy();
        expect(nu).toBeNull();
        expect(und).toBeUndefined();
    })
})

