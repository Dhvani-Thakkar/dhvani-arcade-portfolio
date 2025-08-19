import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/dhvani-arcade-portfolio/', // Must match your repo name exactly
  build: {
    outDir: 'docs', // Build directly into /docs for GitHub Pages
    emptyOutDir: true, // Cleans /docs before each build
  },
  server: {
    host: "::",
    port: 3000,
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));