import type { Meta, StoryObj } from "@storybook/react";

import AutoResizeTextArea from "./AutoResizeTextArea";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/AutoResizeTextArea",
  component: AutoResizeTextArea,
} satisfies Meta<typeof AutoResizeTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyPost: Story = {
  args: {
    id: "body",
    placeholder: "何があった？",
  },
};
