import type { Meta, StoryObj } from "@storybook/vue3";
import Input from "./index.vue";

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
  args: {
    type: "text",
    placeholder: "Placeholder",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    error: 'Text is required',
  },
};
