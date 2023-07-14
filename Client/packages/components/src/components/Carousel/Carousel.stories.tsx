import React from "react";

import { Meta, Story } from "@storybook/react";

import Carousel, { ICarouselProps } from "./Carousel";
import imageOne from "./images/alessandro-carrarini-YKa1kxa9YQo-unsplash.jpg";
import imageTwo from "./images/enrica-tancioni-kvpRkt9E1D4-unsplash.jpg";

export default {
  component: Carousel,
  title: "components/Carousel",
  argTypes: {
    className: {
      options: "carousel",
      control: { type: "text" },
    },
    data: {
      options: [
        {
          image: imageOne,
        },
        {
          image: imageTwo,
        },
      ],
      control: "array",
    },
  },
} as Meta;

const Template: Story<ICarouselProps> = (args) => {
  const { className, data } = args;
  return <Carousel className={className} data={data} />;
};
export const Default = Template.bind({});

Default.args = {
  className: "carousel",
  data: [
    {
      image: imageOne,
    },
    {
      image: imageTwo,
    },
  ],
};
