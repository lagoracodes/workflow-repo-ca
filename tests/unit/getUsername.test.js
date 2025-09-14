import { describe, it, expect, beforeEach } from "vitest";
import { getUsername } from "../../js/utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    const mockUser = { name: "Laura Slivka", email: "lauraslivka@example.com" };
    localStorage.setItem("user", JSON.stringify(mockUser));

    const result = getUsername();
    expect(result).toBe("Laura Slivka");
  });

  it("returns null when no user exists in storage", () => {
    const result = getUsername();
    expect(result).toBe(null);
  });
});
