import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
    server: {
    host: true,   // معادل `vite --host`
    port: 5173,   // می‌تونی حذفش کنی، پیش‌فرض 5173 هست
  }
})