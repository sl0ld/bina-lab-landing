import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/bina-lab-landing/",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
