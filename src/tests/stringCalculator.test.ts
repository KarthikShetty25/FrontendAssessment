import { add } from "../utils/stringCalculator"; // Adjusted to reflect the relative path


describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);  // Test the empty string case
  });
});
