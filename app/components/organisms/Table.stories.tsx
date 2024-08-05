import type { Meta, StoryObj } from "@storybook/react";
import { BasicTable } from "./Table";

const meta = {
  title: "SampleProject/BasicTable",
  component: BasicTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [],
} satisfies Meta<typeof BasicTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tableHeader: {
      headers: ["Header 1", "Header 2", "Header 3", "Header 4"],
    },
    tableRows: [
      { rows: ["Row 1", "Row 2", "Row 3", "Row 4"] },
      { rows: ["Row 1", "Row 2", "Row 3", "Row 4"] },
      { rows: ["Row 1", "Row 2", "Row 3", "Row 4"] },
      { rows: ["Row 1", "Row 2", "Row 3", "Row 4"] },
      { rows: ["Row 1", "Row 2", "Row 3", "Row 4"] },
    ],
  },
};
