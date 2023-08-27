import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hello: Story = {
  args: {
    text: "Hello world!",
  },
};

export const GoodBye: Story = {
  args: {
    text: "Goodbye",
  },
};
