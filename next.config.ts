import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wliupmignrmiqnwcrxue.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    // Image optimization enabled - Korean paths converted to English
  },
  // Increase webpack memory limit
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Memory optimization
    config.optimization = {
      ...config.optimization,
      minimize: true,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    };
    
    return config;
  },
  // Experimental features for stability
  experimental: {
    // Optimize memory usage
    optimizePackageImports: ['next/image'],
  },
  // Disable source maps in development to save memory
  productionBrowserSourceMaps: false,
};

export default nextConfig;
