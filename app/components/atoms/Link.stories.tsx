import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta = {
  title: "SampleProject/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "sample link",
    to: "#",
  },
};