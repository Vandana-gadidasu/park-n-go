import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PersonalInfo from "./personal-info";

describe("About Component", () => {
  test("when click on PersonalInfo link, display text related to personal info", () => {
    render(<PersonalInfo age={20} gender="male" />);
    expect(screen.getByText("male")).toHaveTextContent("male");
  });
});
