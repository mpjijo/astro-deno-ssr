import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import deno from "deno-astro-adapter";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // enable SSR mode
  output: "server",
  adapter: deno(),

});