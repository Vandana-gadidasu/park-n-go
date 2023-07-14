import { combineReducers, Reducer } from "redux";
import reducer, { ICounterState } from "./Counter/counter.reducer";

export interface IState {
  counter: ICounterState;
}
const rootReducer: Reducer<IState> = combineReducers<IState>({
  counter: reducer,
});

export default rootReducer;
