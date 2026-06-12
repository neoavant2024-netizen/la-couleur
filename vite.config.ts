import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  // GitHub Pages（プロジェクトサイト）配信用のベースパス。
  // 独自ドメイン（ルート配信）に切り替える際は "/" に戻す。
  base: "/la-couleur/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
