import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  test("renders Headercomponent", () => {
    render(<Header headerText="Test Label" className="dummy-class" />);
  });

  test("should have the text in header component", () => {
    const { container, asFragment } = render(
      <Header headerText="Test Label" className="dummy-class" />
    );
    expect(screen.getByText("Test Label")).toHaveTextContent("Test Label");
    expect(container.firstChild).toHaveClass("dummy-class");
    expect(asFragment()).toMatchSnapshot();
  });
});
