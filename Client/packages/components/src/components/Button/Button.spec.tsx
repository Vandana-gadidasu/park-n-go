import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button Componentt", () => {
  test("renders Button component", () => {
    render(
      <Button className="dummy-class" onClick={() => {}}>
        Test Label
      </Button>
    );
  });

  test("Verifies the text", () => {
    const { container } = render(
      <Button className="dummy-class" onClick={() => {}}>
        Test Label
      </Button>
    );
    expect(screen.getByText("Test Label")).toHaveTextContent("Test Label");
    expect(container.firstChild).toHaveClass("dummy-class");
  });
  test("Verifies the onclick", () => {
    const onSubmit = jest.fn();
    const { asFragment } = render(
      <Button className="dummy-class" onClick={onSubmit}>
        Test Label
      </Button>
    );
    userEvent.click(screen.getByText("Test Label"));
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(asFragment()).toMatchSnapshot();
  });
});
