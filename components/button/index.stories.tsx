import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./index.vue";

const meta: Meta<typeof Button> = {
  title: "Button/Button",
  component: Button,
  args: {
    type: "button",
    disabled: false,
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
  },
};
