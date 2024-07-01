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

test("check if the array contain only numbers 1st method", () => {
  for (let i = 0; i < data.length; i++) {
    expect(isNaN(data[i])).toBe(false);
  }
});
test("check if the array contain only numbers 2st method", () => {
  for (let i = 0; i < data.length; i++) {
    expect(isNaN(data[i])).toBeFalsy();
  }
});
test("check if the array contain only numbers 2st method", () => {
  for (let i = 0; i < data.length; i++) {
    expect(isNaN(data[i])).not.toBeTruthy();
  }
});

// MY FAVORITE IMPLEMENTATION
// the best implementation cause it avoid the type conversion of data from string to number
test("check if the array contain only numbers", () => {
  for (let i = 0; i < data.length; i++) {
    expect(typeof data[i]).toBe("number");
  }
});

test("check if the first element of the array is greater than 0", () => {
  expect(data[0]).toBeGreaterThan(0);
});
test("check if the first element of the array is greater than or equal to 1", () => {
  expect(data[0]).toBeGreaterThanOrEqual(1);
});

// of course, there's also toBeLessThanOrEqual
test("check if the first element of the array is less than 2", () => {
  expect(data[0]).toBeLessThan(2);
});

test("check for undefined", () => {
  let a;
  expect(a).toBeUndefined();
});

test("check if the string contains a substring by RegExp", () => {
  expect("I love poems").toMatch(/poems/);
});

test("check if the an object contains a specific property name", () => {
  let myDetails = {
    fullName: "John Doe",
    age: 25,
    address: "123 Main Street",
  };
  expect(myDetails).toHaveProperty("address");
});
test("check if the an object contains a specific property with a specific value", () => {
  let myDetails = {
    fullName: "John Doe",
    age: 25,
    address: "123 Main Street",
  };
  expect(myDetails).toHaveProperty("age", 25);
});
