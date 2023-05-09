import { Name } from "./name.js";

describe("given name class", () => {
  describe("when we instantiate it", () => {
    test("should have an object with the properties of the class", () => {
      const name = new Name("Don ignacio");
      expect(name).toHaveProperty("name", "Don ignacio");
    });
  });
});
