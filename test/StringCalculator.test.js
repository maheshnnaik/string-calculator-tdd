const StringCalculator = require("../src/index");

describe("StringCalculator", () => {
    test("hanadle empty string", () => {
        expect(StringCalculator.add("")).toBe(0);
    });
});