import type { Meta, StoryObj } from "@storybook/react";

import HomeContainer from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/HomeContainer",
  component: HomeContainer,
} satisfies Meta<typeof HomeContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
