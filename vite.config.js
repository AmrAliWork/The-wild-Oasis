import { defineConfig } from "vite";
import eslint from "@vitejs/plugin-react";
// https://vite.dev/config/
export default defineConfig({
  plugins: [eslint()],
});
