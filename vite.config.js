import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from "@mdx-js/rollup"
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
const prettyCodeOptions = {
  theme: 'dracula',
  keepBackground: false,
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    }),
  ],
})
