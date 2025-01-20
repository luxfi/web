import { vitePlugin as remix } from '@remix-run/dev'
import { vercelPreset } from '@vercel/remix/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true, // cf: https://github.com/remix-run/react-router/pull/12441
        v3_lazyRouteDiscovery: false // silences warning
      },
      presets: [vercelPreset()],
    }),
    tsconfigPaths(),
    viteCommonjs(),
  ],
  optimizeDeps: {
    include: ['react-dom'],
    // Not excluding these seem to:
    //   a) always force a refresh after initial load: https://github.com/vitejs/vite/discussions/14801)
    //   b) optimize an old version!
    exclude: [
      '@hanzo/ui/primitives-common',
      '@hanzo/ui/util',
    ]
  },
  // https://github.com/remix-run/remix/issues/10156#issuecomment-2440234744
  server: {
    warmup: {
      clientFiles: ['app/**/*.tsx'],
    },
  },
  build: {
    sourcemap: true, // Enable source maps in production build
    rollupOptions: {
      output: {
        sourcemapExcludeSources: false, // Include source content in the map
      },
    },
  },
})
