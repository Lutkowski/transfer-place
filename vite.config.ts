import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @use "src/styles/_variables" as *;
          @use "src/styles/_mixins" as *;
        `,
                silenceDeprecations: ["legacy-js-api"],
            },
        }
    }
})
