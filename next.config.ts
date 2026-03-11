import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable Brotli compression for ~30% smaller network transfer
  compress: true,

  // Remove X-Powered-By header (security + minor size reduction)
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85, 90], // Added 85 to match Hero usage
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
    optimizePackageImports: ['lucide-react', 'framer-motion', 'clsx', 'tailwind-merge'],
    // Enable webpack build worker for faster builds
    webpackBuildWorker: true,
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

  // Security headers and cache configuration
  async headers() {
    return [
      {
        // Security headers for all routes
        source: '/(.*)',
        headers: [
          // Content Security Policy - restrict resource loading
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' fonts.googleapis.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com; font-src 'self' fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://*.upstash.io; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
          },
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Control browser features
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
          },
          // XSS Protection (legacy but still useful)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
        ]
      },
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
