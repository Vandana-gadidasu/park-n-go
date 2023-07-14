import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import userEvent from "@testing-library/user-event";
import * as reactRedux from "react-redux";
import * as middleware from "../../redux/Counter/counter.middleware";
import Home from "./home";

const mockStore = configureMockStore();

describe("Home page", () => {
  let store: any;
  let dummyDispatch: any;
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
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
  test("when click on Hello World link, renders Hello World component", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  test("when click on Hello World link, display text", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByText("Welcome to my Home Page")).toHaveTextContent(
      "Welcome to my Home Page"
    );
  });
  test("Verifies the snapshot", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("when click on Increase Count button, dispatched the action and reflect the changes", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    userEvent.click(screen.getByText("Increase Count"));
    expect(middleware.counterIncrement).toHaveBeenCalledTimes(1);
    expect(dummyDispatch).toHaveBeenCalled();
  });

  test("when click on Decrease Count button, dispatched the action and reflect the changes", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    userEvent.click(screen.getByText("Decrease Count"));
    expect(middleware.counterDecrement).toHaveBeenCalledTimes(1);
    expect(dummyDispatch).toHaveBeenCalled();
  });

  test("when click on Reset button, dispatched the action and reflect the changes", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    userEvent.click(screen.getByText("Reset"));
    expect(middleware.counterReset).toHaveBeenCalledTimes(1);
    expect(dummyDispatch).toHaveBeenCalled();
  });
});
