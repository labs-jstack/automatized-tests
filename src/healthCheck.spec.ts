import { describe, expect, it } from "vitest";
import { healthCheck, HttpRequest } from "./healthCheck";

describe("healthCheck", () => {
  it("should return 201 if everything is working", async () => {
    const requestDummie: HttpRequest = {
      ip: "127.0.0.1",
      body: {},
    };

    const result = await healthCheck(requestDummie);

    expect(result.statusCode).toBe(200);
  });
});
