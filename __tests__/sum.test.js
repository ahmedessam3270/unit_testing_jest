const theSum = require("../sum");

// test (name of the test, function, timeout)
// it (name of the test, function, timeout) // alias of test
test("Return 0 If No Number", () => {
  expect(theSum()).toBe(0);
});
test("Return The Number", () => {
  expect(theSum(10)).toBe(10);
});

test("Return The Number 1 + Number 2", () => {
  expect(theSum(25, 15)).toBe(40);
});

test("Return The Number 1 + Number 2 + Number 3", () => {
  expect(theSum(10, 20, 30)).toBe(60);
});

test("Return The Number 1 + Number 2 + Number 3 + Number 4", () => {
  expect(theSum(10, 20, 30, 10)).toBe(70);
});
test("Return The Sum Result Of All Numbers", () => {
  expect(theSum(1, 9, 10, 40, 20, 10, 100, 10)).toBe(200);
});
