# Removing redux from ui-react-starter

- To remove redux from ui-react-starter remove `packages/client/src/redux` folder
- Remove following lines of code from folloing list of files :

  1. `packages/client/src/pages/home/home.tsx`

  ```
    import {
    counterIncrement,
    counterDecrement,
    counterReset,
    } from "../../redux/Counter/counter.middleware";
    import { IState } from "../../redux/rootReducer";
    ...
    ...
    ...
    const { count } = useSelector((state: IState) => state.counter);
    <div className="counter">
        <div className="counter-label"> Count: {count}</div>
        <div className="counter-btn-container">
          <Button
            className="primary increment"
            onClick={() => dispatch(counterIncrement())}
          >
            Increase Count
          </Button>

          <Button
            className="primary decrement"
            onClick={() => dispatch(counterDecrement())}
          >
            Decrease Count
          </Button>

          <Button
            className="secondary reset"
            onClick={() => dispatch(counterReset())}
          >
            Reset
          </Button>
        </div>
      </div>
  ```

  2. `packages/client/src/pages/home/home.spec.tsx`

  ```
    beforeEach(() => {
      useSelectorMock.mockClear();
      useDispatchMock.mockClear();
      dummyDispatch = jest.fn();
      useDispatchMock.mockReturnValue(dummyDispatch);
      jest.spyOn(middleware, "counterIncrement");
      jest.spyOn(middleware, "counterDecrement");
      jest.spyOn(middleware, "counterReset");

      store = mockStore({ counter: { count: 0 } });
    });
    test("Verifies the text", () => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
      userEvent.click(screen.getByText("Increase Count"));
      expect(middleware.counterIncrement).toHaveBeenCalledTimes(1);
      expect(dummyDispatch).toHaveBeenCalled();
    });

    test("Verifies the text", () => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
      userEvent.click(screen.getByText("Decrease Count"));
      expect(middleware.counterDecrement).toHaveBeenCalledTimes(1);
      expect(dummyDispatch).toHaveBeenCalled();
    });

    test("Verifies the text", () => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );

      userEvent.click(screen.getByText("Reset"));
      expect(middleware.counterReset).toHaveBeenCalledTimes(1);
      expect(dummyDispatch).toHaveBeenCalled();
    });

  ```

  Also Remove `<Provider> tags from test cases`

  3. `packages/client/jest.config.js`

  ```
    // Remove following lines from collectCoverageFrom
        "!src/redux/rootReducer.ts",
        "!src/redux/store.ts",

  ```

  4.Remove following dependencies from `packages/client/package.json`

  ```
    "react-redux": "^7.2.5",
    "redux": "^4.1.1",
    "redux-thunk": "^2.3.0",
    "@types/react-redux": "^7.1.18",
    "@types/redux": "^3.6.0",
    "@types/redux-mock-store": "^1.0.3",
  ```

  5.  Remove `<Provider store={configStore}> tag from packages/client/src/index.tsx`
