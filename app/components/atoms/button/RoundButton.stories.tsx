import type { Meta, StoryObj } from "@storybook/react";
import { RoundButton } from "./RoundButton";

const meta = {
  title: "SampleProject/Button/RoundButton",
  component: RoundButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
    type: "button",
  },
} satisfies Meta<typeof RoundButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "RoundButton",
  args: {},
};
