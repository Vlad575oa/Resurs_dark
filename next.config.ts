import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable Brotli compression for ~30% smaller network transfer
  compress: true,

  // Remove X-Powered-By header (security + minor size reduction)
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    // Enable webpack build worker for faster builds
    webpackBuildWorker: true,
    // Disable CSS optimization (requires 'critters' package)
    optimizeCss: false,
  },
  // Silence Turbopack error while keeping webpack config for analysis
  turbopack: {},

  // Custom webpack configuration for bundle analysis
  webpack: (config, { isServer, dev }) => {
    // Bundle analyzer - run with: ANALYZE=true npm run build
    if (!isServer && process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: true,
          reportFilename: dev
            ? '../client.html'
            : '../client.html',
        })
      );
    }
    return config;
  },

  // Add cache headers for static assets
  async headers() {
    return [
      {
        // Cache static assets (JS, CSS, images) for 1 year
        source: '/:path*.(js|css|png|jpg|jpeg|gif|webp|avif|svg|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache HTML files for 1 hour (allows for quick updates)
        source: '/:path*/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // CDN-specific headers for better edge caching
        source: '/:path*',
        headers: [
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=31536000, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
