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
        },
        {
          filename: 'services.html',
          template: 'services.html',
        },
        {
          filename: 'tour.html',
          template: 'tour.html',
        },
        {
          filename: 'devs.html',
          template: 'devs.html',
        },
        {
          filename: 'natha.html',
          template: 'natha.html',
        },
        {
          filename: 'xxavvi.html',
          template: 'xxavvi.html',
        }
      ]
    })
  ],
})
