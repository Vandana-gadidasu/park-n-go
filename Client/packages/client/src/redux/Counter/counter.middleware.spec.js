import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./counter.actions";
import {
  counterIncrement,
  counterDecrement,
  counterReset,
} from "./counter.middleware";

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

describe("middleware functions", () => {
  let store;

  beforeEach(() => {
    jest.spyOn(actions, "setIncrement");
    jest.spyOn(actions, "setDecrement");
    jest.spyOn(actions, "setReset");
    store = mockStore({ counter: { count: 0 } });
  });
  test("increment the count middleware", () => {
    jest.useFakeTimers();
    store.dispatch(counterIncrement());
    jest.advanceTimersByTime(1000);
    expect(actions.setIncrement).toHaveBeenCalledTimes(1);
    jest.useRealTimers();
  });
  test("decrement the count middleware", () => {
    jest.useFakeTimers();
    store.dispatch(counterDecrement());
    jest.advanceTimersByTime(1000);
    expect(actions.setDecrement).toHaveBeenCalledTimes(1);
    jest.useRealTimers();
  });
  test("reset the count middleware", () => {
    jest.useFakeTimers();
    store.dispatch(counterReset());
    jest.advanceTimersByTime(1000);
    expect(actions.setReset).toHaveBeenCalledTimes(1);
    jest.useRealTimers();
  });
});
