import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, Route } from "react-router-dom";

import Hobby from "./Hobby";

describe("Hobby Component", () => {
  test("when route path contains hobbyId after clicking on hobby-1, display respective hobby", () => {
    const hobbies = ["Watching movies", "Reading books"];

    render(
      <MemoryRouter initialEntries={["/0"]}>
        <Route path="/:hobbyId">
          <Hobby hobbies={hobbies} />
        </Route>
      </MemoryRouter>
    );
    expect(screen.getByText("Watching movies")).toBeInTheDocument();
  });

  test("when route path contains hobbyId after clicking on hobby-2, display respective hobby", () => {
    const hobbies = ["Watching movies", "Reading books"];

    render(
      <MemoryRouter initialEntries={["/1"]}>
        <Route path="/:hobbyId">
          <Hobby hobbies={hobbies} />
        </Route>
      </MemoryRouter>
    );
    expect(screen.getByText("Reading books")).toBeInTheDocument();
  });
});
