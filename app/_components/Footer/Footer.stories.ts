import type { Meta, StoryObj } from "@storybook/react";

import Footer from "./Footer";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    pathname: "/",
  },
};

export const Profile: Story = {
  args: {
    pathname: "/profile",
  },
};
