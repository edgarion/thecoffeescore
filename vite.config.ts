import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env.TURSO_DATABASE_URL': JSON.stringify(env.TURSO_DATABASE_URL || 'libsql://thecoffeescore-thecoffeescore.aws-eu-west-1.turso.io'),
      'process.env.TURSO_AUTH_TOKEN': JSON.stringify(env.TURSO_AUTH_TOKEN || ''),
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env': JSON.stringify({
        TURSO_DATABASE_URL: env.TURSO_DATABASE_URL || 'libsql://thecoffeescore-thecoffeescore.aws-eu-west-1.turso.io',
        TURSO_AUTH_TOKEN: env.TURSO_AUTH_TOKEN || '',
        NODE_ENV: mode,
      }),
      global: 'globalThis',
    },
    server: {
      port: 3000,
      open: false,
    },
  };
});

