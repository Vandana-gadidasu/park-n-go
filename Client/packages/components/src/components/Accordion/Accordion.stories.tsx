import React from "react";

import { Meta, Story } from "@storybook/react";

import Accordion, { IAccordionProps } from "./Accordion";

export default {
  component: Accordion,
  title: "components/Accordion",
  argTypes: {
    className: {
      options: "accordion",
      control: { type: "text" },
    },
    title: { options: "section-1", control: { type: "text" } },
    content: {
      options: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      control: { type: "text" },
    },
  },
} as Meta;

const Template: Story<IAccordionProps> = (args) => {
  const { title, className, content } = args;
  return <Accordion className={className} title={title} content={content} />;
};
export const Default = Template.bind({});

Default.args = {
  className: "accordion",
  title: "section-1",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};
