import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { env } from 'process';

const target = env.TESTING ? 'https://host.docker.internal:44373' :
    env.API_URL ? env.API_URL : 'https://localhost:44373';

export default defineConfig({
    plugins: [ react() ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '^/Skills': {
                target,
                secure: false
            }
        },
        host: true,
        strictPort: true,
        port: 5173
    },
    preview: {
        port: 5173
    }
})