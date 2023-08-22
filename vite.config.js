import { defineConfig } from "vite"
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          filename: 'index.html',
          template: 'index.html',
        },
        {
          filename: 'about.html',
          template: 'about.html',
        }
      ]
    })
  ],
})
