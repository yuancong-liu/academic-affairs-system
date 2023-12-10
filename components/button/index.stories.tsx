import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "./index.vue";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};
