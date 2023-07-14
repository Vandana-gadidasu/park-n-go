import { DECREMENT, INCREMENT, RESET } from "./counter.types";

type SetIncrement = { type: typeof INCREMENT };
type SetDecrement = { type: typeof DECREMENT };
type SetReset = { type: typeof RESET; payload: number };

export const setIncrement = (): SetIncrement => ({ type: INCREMENT });
export const setDecrement = (): SetDecrement => ({ type: DECREMENT });
export const setReset = (value: number): SetReset => ({
  type: RESET,
  payload: value,
});

export type Actions = SetIncrement | SetDecrement | SetReset;
