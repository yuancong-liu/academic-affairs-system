import type { StorybookConfig } from "@storybook-vue/nuxt";

const config: StorybookConfig = {
  stories: ["../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-vue-slots",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    config.css.preprocessorOptions = {
      scss: {
        additionalData: `@import "~/assets/scss/variables.scss"; @import "~/assets/scss/mixins.scss";`,
      },
    };
    return config;
  },
};
export default config;
