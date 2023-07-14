import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import About from "./about";

describe("About", () => {
  test("when click on about link, renders the about page", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
  });

  test("when click on about link, display the text", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(screen.getByText("welcome to about page")).toHaveTextContent(
      "welcome to about page"
    );
  });
});

describe("PersonalInfo", () => {
  test("when click on PersonalInfo link, renders PersonalInfo page", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    userEvent.click(screen.getByText("PersonalInfo"));
    expect(screen.getByText("male")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
  });
});

describe("Hobbies", () => {
  test("when click on Hobbies link, renders hobbies page", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    userEvent.click(screen.getByText("Hobbies"));
    expect(screen.getByText("hobby-1")).toBeInTheDocument();
  });
});
