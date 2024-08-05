import type { Meta, StoryObj } from "@storybook/react";
import { InputForm } from "./InputForm";

const meta = {
  title: "SampleProject/InputForm",
  component: InputForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    placeholder: "入力してください",
    name: "sample",
  },
};
