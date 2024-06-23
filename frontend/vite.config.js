import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [vue()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        build: {
            outDir: '../backend/public',
            assetsDir: 'assets',
            rollupOptions: {
                output: {
                    assetFileNames: (assetInfo) => {
                        if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
                            return 'assets/fonts/[name].[ext]'; // 폰트를 assets/fonts 폴더로 이동
                        }
                        return 'assets/[name].[ext]';
                    }
                }
            }
        }
    };
});
