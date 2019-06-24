function add(a, b) {
  return a + b;
}

describe("add", () => {
  it("sums two numbers", () => {
    const a = 1;
    const b = 3;
    const expectedOutput = 4;
    const actualOutput = add(a, b);
    expect(actualOutput).toEqual(expectedOutput);
  });
});
