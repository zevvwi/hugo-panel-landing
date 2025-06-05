import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import vitePluginInjectDataLocator from "./plugins/vite-plugin-inject-data-locator";

// https://vite.dev/config/
export default defineConfig({
  base: "/hugo-panel-landing/",
  plugins: [react(), vitePluginInjectDataLocator()],
});