import { setIncrement, setDecrement, setReset } from "./counter.actions";

export const counterIncrement = () => (dispatch: any) => {
  setTimeout(() => {
    dispatch(setIncrement());
  }, 1000);
};

export const counterDecrement = () => (dispatch: any) => {
  setTimeout(() => {
    dispatch(setDecrement());
  }, 1000);
};

export const counterReset = () => (dispatch: any) => {
  setTimeout(() => {
    dispatch(setReset(0));
  }, 1000);
};
