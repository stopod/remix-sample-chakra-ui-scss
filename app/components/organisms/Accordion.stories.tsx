import type { Meta, StoryObj } from "@storybook/react";
import { LinkAccordion } from "./Accordion";

const meta = {
  title: "SampleProject/LinkAccordion",
  component: LinkAccordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [],
} satisfies Meta<typeof LinkAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accordionItems: [
      {
        viewTitle: "Accordion Item 1",
        links: [
          { linkTitle: "Link 1", href: "#" },
          { linkTitle: "Link 2", href: "#" },
        ],
      },
      {
        viewTitle: "Accordion Item 2",
        links: [
          { linkTitle: "Link 1", href: "#" },
          { linkTitle: "Link 2", href: "#" },
        ],
      },
      {
        viewTitle: "Accordion Item 3",
        links: [
          { linkTitle: "Link 1", href: "#" },
          { linkTitle: "Link 2", href: "#" },
        ],
      },
      {
        viewTitle: "Accordion Item 4",
        links: [
          { linkTitle: "Link 1", href: "#" },
          { linkTitle: "Link 2", href: "#" },
        ],
      },
      {
        viewTitle: "Accordion Item 5",
        links: [
          { linkTitle: "Link 1", href: "#" },
          { linkTitle: "Link 2", href: "#" },
          { linkTitle: "Link 3", href: "#" },
          { linkTitle: "Link 4", href: "#" },
          { linkTitle: "Link 5", href: "#" },
        ],
      },
    ],
  },
};
