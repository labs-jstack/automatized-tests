import { expect, it } from "vitest";
import { validateCoursePrice } from "./validateCoursePrice";

it("should return true for valid prices", () => {
  const isValid = validateCoursePrice(1);
  expect(isValid).toBe(true);
});

it("should throw if a negative number is provided", () => {
  expect(() => validateCoursePrice(-10)).toThrow(
    new Error("Price cannot be a negative number"),
  );
});
