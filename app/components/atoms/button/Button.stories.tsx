import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "SampleProject/Button/Default",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
    onClick: () => alert("Clicked"),
    type: "button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gray: Story = {};

export const Blue: Story = {
  args: {
    colorScheme: "blue",
  },
};
