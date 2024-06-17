import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@src': '/src',
            '@pages': '/src/pages',
            '@components': '/src/components',
            '@routes': '/src/routes',
            '@redux': '/src/redux',
            '@shared': '/shared',
        },
    },
    server: {
        watch: {
            usePolling: true,
        },
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false,
            },
        },
    },
});
