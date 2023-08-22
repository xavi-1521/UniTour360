import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"

const options = {
  basedir: './src/index.html',
  pretty: true
}

const locals = {
}

export default defineConfig({
  plugins: [pugPlugin(options, locals)],
})
