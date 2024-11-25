import { add } from "../utils/stringCalculator"; // Adjusted to reflect the relative path


describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);  // Test the empty string case
  });
  test("should return the correct sum for numbers separated by newlines", () => {
    expect(add("1\n2,3")).toBe(6);  // Mixed delimiters
    expect(add("1\n2\n3")).toBe(6); // Only newlines
});
test("should throw an error for invalid numbers", () => {
  expect(() => add("1,a,3")).toThrow('Invalid number: "a"');
});

});
