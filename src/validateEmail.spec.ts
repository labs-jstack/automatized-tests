import { expect, it } from "vitest";
import { validateEmail } from "./validateEmail";

it.each(["", "test", "test@", "@test", "test@test", "test@test."])(
  "should return false for invalid email: %s",
  (email: string) => {
    const isValid = validateEmail(email);
    expect(isValid).toBe(false);
  },
);
