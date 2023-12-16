import type { Meta, StoryObj } from "@storybook/vue3";
import TextField from "./index.vue";

const meta: Meta<typeof TextField> = {
  title: "Form/Text Field",
  component: TextField,
  args: {
    type: "text",
    placeholder: "Placeholder",
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

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
