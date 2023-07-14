import { createStore, applyMiddleware, compose, StoreEnhancer } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export default function configureStore() {
  const enhancers: StoreEnhancer[] = [applyMiddleware(thunk)];
  let composedEnhancers: StoreEnhancer;
  if (process.env.NODE_ENV === "development") {
    composedEnhancers = composeWithDevTools(...enhancers);
  } else {
    composedEnhancers = compose(...enhancers);
  }
  const store = createStore(rootReducer, composedEnhancers);

  return store;
}
