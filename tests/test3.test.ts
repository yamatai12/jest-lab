import { add } from "../src/add";

describe("test3 add", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
