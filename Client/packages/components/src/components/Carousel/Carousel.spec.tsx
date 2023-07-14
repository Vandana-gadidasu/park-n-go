import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Carousel from "./Carousel";

import imageOne from "./images/alessandro-carrarini-YKa1kxa9YQo-unsplash.jpg";
import imageTwo from "./images/enrica-tancioni-kvpRkt9E1D4-unsplash.jpg";

describe("Carousel", () => {
  const ImageData = [
    {
      image: imageOne,
    },
    {
      image: imageTwo,
    },
  ];

  test("renders Carousel component", () => {
    render(<Carousel className="carousel" data={ImageData} />);
  });

  test("should have carousal content", () => {
    render(<Carousel className="carousel" data={ImageData} />);
    expect(screen.getByText("prev")).toHaveTextContent("prev");
    expect(screen.getByText("next")).toHaveTextContent("next");
  });

  test("when click on next button, get next slide", () => {
    render(<Carousel className="carousel" data={ImageData} />);
    userEvent.click(screen.getByText("next"));
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("id", "image-2");
    userEvent.click(screen.getByText("next"));
    const imagenext = screen.getByRole("img");
    expect(imagenext).toHaveAttribute("id", "image-1");
  });
  test("when click on prev button, get previous slide", () => {
    const { asFragment } = render(
      <Carousel className="carousel" data={ImageData} />
    );
    userEvent.click(screen.getByText("prev"));
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("id", "image-2");
    userEvent.click(screen.getByText("prev"));
    const imageprev = screen.getByRole("img");
    expect(imageprev).toHaveAttribute("id", "image-1");
    expect(asFragment()).toMatchSnapshot();
  });
});
