import type { Meta, StoryObj } from "@storybook/vue3";
import Select from "./index.vue";

const meta: Meta<typeof Select> = {
  title: "Form/Select",
  component: Select,
  args: {
    name: "select",
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};
