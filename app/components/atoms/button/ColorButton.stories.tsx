import type { Meta, StoryObj } from "@storybook/react";
import { ColorButton } from "./ColorButton";

const meta = {
  title: "SampleProject/Button/ColorButton",
  component: ColorButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
    type: "button",
  },
} satisfies Meta<typeof ColorButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "ColorButton",
  args: {
    colorScheme: "gray",
  },
};
