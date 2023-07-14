import React from "react";

import { Meta, Story } from "@storybook/react";

import Button, { IButtonProps } from "./Button";

export default {
  component: Button,
  title: "components/Button",
  argTypes: {
    className: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    children: { options: "Button", control: { type: "text" } },
  },
} as Meta;

const Template: Story<IButtonProps> = (args) => {
  const { onClick, className, children } = args;
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};
export const Primary = Template.bind({});

Primary.args = { className: "primary", children: "Button" };

export const Secondary = Template.bind({});

Secondary.args = { className: "secondary", children: "Button" };
