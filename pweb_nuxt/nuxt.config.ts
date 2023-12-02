// https://nuxt.com/docs/api/configuration/nuxt-config
import axios from "axios";
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/content", "@pinia/nuxt"],

  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },

  ssr: false,

  css: ["aos/dist/aos.css", "@/assets/styles.css"],

  routes: async () => {
    const { data } = await axios.get("http://localhost:5000/api/blog");
    const routes = data.docs.map((blogPost) => ({
      route: `/blogs/${blogPost.id}`,
      payload: { id: blogPost.id }, // Use blogPost.id as payload
    }));

    return routes;
  },
});
