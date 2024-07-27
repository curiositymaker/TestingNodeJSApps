import { describe, expect, test } from "@jest/globals";
import { sum } from "./index";

describe("sum function", () => {
  test("adds two positive integers correctly", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(10, 20)).toBe(30);
    expect(sum(100, 200)).toBe(300);
  });

  test("adds two negative integers correctly", () => {
    expect(sum(-1, -2)).toBe(-3);
    expect(sum(-10, -20)).toBe(-30);
    expect(sum(-100, -200)).toBe(-300);
  });

  test("adds a positive and a negative integer correctly", () => {
    expect(sum(1, -2)).toBe(-1);
    expect(sum(-10, 20)).toBe(10);
    expect(sum(100, -200)).toBe(-100);
  });

  test("adds zero correctly", () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
    expect(sum(0, -5)).toBe(-5);
    expect(sum(-5, 0)).toBe(-5);
  });

  test("adds floating-point numbers correctly", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3); // Use toBeCloseTo for floating-point comparisons
    expect(sum(1.5, 2.5)).toBe(4);
    expect(sum(-1.5, -2.5)).toBe(-4);
  });

  test("handles large numbers correctly", () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
    expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
  });

  test("returns the same number when adding with zero", () => {
    expect(sum(5, 0)).toBe(5);
    expect(sum(0, 5)).toBe(5);
    expect(sum(-5, 0)).toBe(-5);
    expect(sum(0, -5)).toBe(-5);
  });

  test("is commutative", () => {
    expect(sum(2, 3)).toBe(sum(3, 2));
    expect(sum(-1, 5)).toBe(sum(5, -1));
  });

  test("handles very small floating-point numbers", () => {
    expect(sum(1e-10, 2e-10)).toBeCloseTo(3e-10);
  });

  test("throws error for non-number inputs", () => {
    expect(() => sum("1" as any, 2)).toThrow();
    expect(() => sum(1, "2" as any)).toThrow();
    expect(() => sum({} as any, [] as any)).toThrow();
  });
});
