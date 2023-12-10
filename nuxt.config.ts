// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@storybook-vue/nuxt-storybook"],
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
  css: ["~/assets/scss/base.css"],
  webpack: {
    cssSourceMap: true,
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
