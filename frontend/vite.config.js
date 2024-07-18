import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows access from outside the container
    port: 4000, // Ensure the port matches the EXPOSE port in Dockerfile
  },
});
