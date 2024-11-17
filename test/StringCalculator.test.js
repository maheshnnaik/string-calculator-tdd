const StringCalculator = require("../src/index");

describe("StringCalculator", () => {
    test("hanadle empty string", () => {
        expect(StringCalculator.add("")).toBe(0);
    });

    test("hanadle one number", () => {
        expect(StringCalculator.add("1")).toBe(1);
    });

    test("hanadle multiple numbers separated by comma", () => {
        expect(StringCalculator.add("1,2,3,23")).toBe(29);
    });

    test("hanadle multiple numbers separated by newline", () => {
        expect(StringCalculator.add("1\n2,3")).toBe(6);
    });

    test("hanadle multiple numbers separated by custom delimiters", () => {
        expect(StringCalculator.add("//;\n1;2")).toBe(3);
    });

    test("hanadle multiple numbers separated by custom delimiters", () => {
        expect(StringCalculator.add("//e\n1e2")).toBe(3);
    });

    test("hanadle multiple numbers separated by custom delimiters", () => {
        expect(StringCalculator.add("//e\n1,2")).toBe(NaN);
    });

});