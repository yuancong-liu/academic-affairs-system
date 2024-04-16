// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@storybook-vue/nuxt-storybook",
    "@vee-validate/nuxt",
    "@nuxtjs/tailwindcss",
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
  tailwindcss: {
    editorSupport: true,
    cssPath: "~/assets/scss/tailwind.scss",
    configPath: "tailwind.config",
  },
  features: {
    inlineStyles: false,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/scss/variables.scss"; @import "~/assets/scss/mixins.scss";`,
        },
      },
    },
  },
});
