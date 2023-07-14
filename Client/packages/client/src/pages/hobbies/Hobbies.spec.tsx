import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { MemoryRouter, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import Hobbies from "./Hobbies";

describe("Hobbies component", () => {
  test("when click on Hobbies link, renders Hobbies page", () => {
    render(
      <MemoryRouter initialEntries={["/hobbies"]}>
        <Route path="/hobbies">
          <Hobbies />
        </Route>
      </MemoryRouter>
    );
  });

  test("when click on hobby-1, display the text related to hobby-1", () => {
    render(
      <MemoryRouter initialEntries={["/hobbies"]}>
        <Route path="/hobbies">
          <Hobbies />
        </Route>
      </MemoryRouter>
    );
    userEvent.click(screen.getByText("hobby-1"));
    expect(screen.getByText("Watching movies")).toBeInTheDocument();
  });

  test("when click on hobby-2, display the text related to hobby-2", () => {
    render(
      <MemoryRouter initialEntries={["/hobbies"]}>
        <Route path="/hobbies">
          <Hobbies />
        </Route>
      </MemoryRouter>
    );
    userEvent.click(screen.getByText("hobby-2"));
    expect(screen.getByText("Reading books")).toBeInTheDocument();
  });
});
