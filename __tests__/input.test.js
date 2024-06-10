const theFilter = require("../input");
describe("Validate the input field", () => {
  test("Check if Name is empty", () => {
    expect(theFilter()).toBe("Unknown");
  });
  test("Check if there's spaces before or after the name", () => {
    expect(theFilter(" Ahmed ")).toBe("Ahmed");
  });
  test("Check if Name Length > 10 charachters", () => {
    expect(theFilter("Ahmed_Essam_Mohamed")).toBe("Ahmed_Essa");
  });
  test("Check if Name starts with _", () => {
    expect(theFilter("_Ahmed")).toBe("Ahmed");
  });
});
