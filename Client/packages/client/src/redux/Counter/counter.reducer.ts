import { Actions } from "./counter.actions";
import { INCREMENT, DECREMENT, RESET } from "./counter.types";

export interface ICounterState {
  count: number;
}

const INITIAL_STATE = {
  count: 0,
};

const reducer = (state = INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
