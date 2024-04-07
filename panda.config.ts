import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./components/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          base: { value: '#FFA234' },
          link: { value: '#66a3e0' },
          white: { value: '#fff' },
          black: { value: '#000' },
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
