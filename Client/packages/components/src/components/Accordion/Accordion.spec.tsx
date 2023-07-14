import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Accordion from "./Accordion";

describe("Accordion", () => {
  test("renders Accordion component", () => {
    render(
      <Accordion
        className="Accordion"
        title="section 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    );
  });

  test("should have the title", () => {
    render(
      <Accordion
        className="Accordion"
        title="section 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    );
    expect(screen.getByText("section 1")).toHaveTextContent("section 1");
  });

  test("should have the content", () => {
    const { asFragment } = render(
      <Accordion
        className="Accordion"
        title="section 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    );
    expect(screen.getByText("section 1")).toHaveTextContent("section 1");
    userEvent.click(screen.getByText("section 1"));
    expect(
      screen.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      )
    ).toHaveTextContent(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
