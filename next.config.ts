import type { NextConfig } from "next";

// Security headers applied to every route (anti-clickjacking, no MIME sniffing,
// tight referrer + permissions policy). Applied by `next start` / hosting.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  // Don't ship browser source maps in production (keeps client code minified/opaque).
  productionBrowserSourceMaps: false,
  // Hide the framework fingerprint header.
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
