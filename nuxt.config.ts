// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@storybook-vue/nuxt-storybook",
    "@vee-validate/nuxt",
  ],
  middleware: ["auth"],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VForm",
      Field: "VField",
      FieldArray: "VFieldArray",
      ErrorMessage: "VErrorMessage",
    },
  },
  storybook: {
    url: "http://localhost:6006",
    storybookRoute: "/__storybook__",
    port: 6006,
  },
  components: [
    {
      path: "~/components",
      extensions: ["vue"],
    },
  ],
  css: ["~/assets/scss/base.scss"],
  experimental: {
    inlineSSRStyles: false,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/scss/variables.scss";`,
        },
      },
    },
  },
});
