import reducer from "./counter.reducer";
import { setDecrement, setIncrement, setReset } from "./counter.actions";

describe("reducer class", () => {
  test("increment the count", () => {
    const { count } = reducer({ count: 0 }, setIncrement());
    expect(count).toBe(1);
  });

  test("decrement the count", () => {
    const { count } = reducer({ count: 1 }, setDecrement());
    expect(count).toBe(0);
  });

  test("reset the count", () => {
    const { count } = reducer({ count: 1 }, setReset(0));
    expect(count).toBe(0);
  });

  test("verifies the default state", () => {
    const { count } = reducer(undefined, { type: null });
    expect(count).toBe(0);
  });
});
