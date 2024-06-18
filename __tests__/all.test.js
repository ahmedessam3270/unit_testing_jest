const data = require("../all");

test("check if the length of the array 1st method", () => {
  expect(data.length).toBe(6);
});

test("check if the length of the array 2nd method", () => {
  expect(data).toHaveLength(6);
});

test("check if the array contain no 6", () => {
  expect(data).toContain(6);
});
test("check if the array doesn't contain no 7", () => {
  expect(data).not.toContain(7);
});
test("check if the array doesn't contain no 0", () => {
  for (let i = 0; i < data.length; i++) {
    expect(data[i]).not.toBe(0);
  }
});
