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

export const Default: Story = {
  args: {
    label: "Button",
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    disabled: true,
  },
};

export const Outlined: Story = {
  args: {
    label: "Button",
    variant: "outlined",
  },
};

export const Text: Story = {
  args: {
    label: "Button",
    variant: "text",
  },
};
