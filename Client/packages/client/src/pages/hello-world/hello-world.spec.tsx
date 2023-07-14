import { render, screen, waitFor } from "@testing-library/react";
import instance from "../../api/api";
import HelloWorld from "./hello-world";

describe("Hello World", () => {
  test("when click on Hello World link, renders Hello World component", () => {
    render(<HelloWorld name="Test Prop" />);
  });

  test("when click on Hello World link, display the text", () => {
    render(<HelloWorld name="first props" />);
    expect(screen.getByText("Hello first props")).toHaveTextContent(
      "Hello first props"
    );
  });
  const MOCK_GET = {
    data: { message: "Something" },
    status: 200,
    statusText: "",
    headers: {},
    config: {},
  };
  test("should call axios in Hello World Component", async () => {
    jest.spyOn(instance, "getWithRetries").mockImplementation(() => MOCK_GET);
    const { getByText } = render(<HelloWorld name="first props" />);

    await waitFor(() => {
      expect(getByText(`"Something"`)).toBeInTheDocument();
    });
  });
});
