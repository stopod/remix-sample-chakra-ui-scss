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

export const Colors: Story = {
  render: () => {
    return (
      <>
        <ColorButton colorScheme="gray">Button</ColorButton>
        <ColorButton colorScheme="red">Button</ColorButton>
        <ColorButton colorScheme="orange">Button</ColorButton>
        <ColorButton colorScheme="yellow">Button</ColorButton>
        <ColorButton colorScheme="green">Button</ColorButton>
        <ColorButton colorScheme="teal">Button</ColorButton>
        <ColorButton colorScheme="blue">Button</ColorButton>
        <ColorButton colorScheme="cyan">Button</ColorButton>
        <ColorButton colorScheme="purple">Button</ColorButton>
        <ColorButton colorScheme="pink">Button</ColorButton>
      </>
    );
  },
  args: {
    colorScheme: "gray",
  },
};
