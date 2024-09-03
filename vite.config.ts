import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/assets": "/src/assets",
      "@/components": "/src/components",
      "@/domain": "/src/domain",
      "@/features": "/src/features",
      "@/hooks": "/src/hooks",
      "@/infra": "/src/infra",
      "@/routes": "/src/routes",
      "@/theme": "/src/theme",
      "@/utils": "/src/utils",
    },
  },
});
