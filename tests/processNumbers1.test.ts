import { processNumbers } from "../src/processNumbers";

describe("processNumbers", () => {
  it("should double each number in the array", () => {
    const numbers = [1, 2, 3];
    const result = processNumbers(numbers);
    expect(result).toEqual([2, 4, 6]);
  });

  it("should return an empty array if no numbers are provided", () => {
    const numbers: number[] = [];
    const result = processNumbers(numbers);
    expect(result).toEqual([]);
  });
});
