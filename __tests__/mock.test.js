const mocker = require("../mock");

test("mock function", () => {
  const mocker = jest.fn((name) => `Hello ${name}`);
  expect(mocker("ahmed")).toBe("Hello ahmed");
  expect(mocker("mos3ad")).toBe("Hello mos3ad");
  expect(mocker("Hany")).toBe("Hello Hany");
  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledTimes(3);
  expect(mocker).toHaveBeenCalledWith("ahmed");
  expect(mocker).toHaveBeenLastCalledWith("Hany");
});
