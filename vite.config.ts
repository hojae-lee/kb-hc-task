import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react({
      babel: {
        // react compiler (컴파일러 사용시 메모이제이션 문제 자동 해결이라서 메모이제이션을 별도로 처리할 필요가 없어짐)
        plugins: [['babel-plugin-react-compiler']]
      }
    }),
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@provider': path.resolve(__dirname, 'src/provider'),
      '@mocks': path.resolve(__dirname, 'src/mocks'),
      '@common': path.resolve(__dirname, 'src/common')
    }
  }
})
