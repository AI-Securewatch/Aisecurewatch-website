import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    rollupOptions: {
      output: {
        // Output-level chunking only -- it changes which physical file each
        // module lands in after the bundle is built, not when a component
        // resolves. entry-server.tsx renders with renderToStaticMarkup,
        // which has no Suspense/streaming support, so route-level
        // React.lazy() would break prerendering; this is the SSR-safe way
        // to split the largest, most stable vendor code out of the main
        // chunk so route changes don't re-fetch it.
        //
        // Client build only: the SSR build (vite build --ssr) externalizes
        // react/react-dom/etc rather than bundling them, and Rollup errors
        // if manualChunks names a module that's been externalized.
        manualChunks: isSsrBuild
          ? undefined
          : {
              'react-vendor': ['react', 'react-dom', 'react-router'],
              icons: ['lucide-react'],
            },
      },
    },
  },
}))
