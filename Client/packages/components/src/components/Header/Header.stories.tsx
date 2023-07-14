import React from "react";

import { Meta, Story } from "@storybook/react";

import Header, { IHeader } from "./Header";

export default {
  component: Header,
  title: "components/Header",
  argTypes: {
    className: {
      options: "header",
      control: { type: "text" },
    },
    headerText: { options: "hello header", control: { type: "text" } },
  },
} as Meta;

const Template: Story<IHeader> = (args) => {
  const { headerText, className } = args;

  return <Header headerText={headerText} className={className} />;
};

export const Default = Template.bind({});
Default.args = { className: "header", headerText: "hello header" };
