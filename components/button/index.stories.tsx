import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./index.vue";

const meta: Meta<typeof Button> = {
  title: "Button/Button",
  component: Button,
  args: {
    label: "Button",
    type: "button",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};
