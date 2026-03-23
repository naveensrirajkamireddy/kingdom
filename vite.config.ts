/// <reference types="vitest" />

import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isDev = command === "serve";

  return {
    base: isDev ? "/" : "/",
    plugins: [react(), legacy()],
    build: {
      chunkSizeWarningLimit: 1500, // Threshold (in KB)
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});
