import type { Meta, StoryObj } from "@storybook/react";
import { DefaultButton } from "./button";

const meta = {
  title: "SampleProject/Button",
  component: DefaultButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DefaultButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
    type: "button",
    onClick: () => alert("Clicked"),
  },
};
