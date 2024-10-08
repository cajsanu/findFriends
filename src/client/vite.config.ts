import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://server:5053",
        changeOrigin: true,
      },
      "/register": {
        target: "http://server:5053",
        changeOrigin: true,
      },
      "/login": {
        target: "http://server:5053",
        changeOrigin: true,
      },
      "/chatHub": {
        target: "http://server:5053",
        changeOrigin: true,
        ws: true,
      },
    },
  },
});
