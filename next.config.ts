import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Hide the "X-Powered-By: Next.js" header to conceal your tech stack
  poweredByHeader: false,

  // 2. Catch React bugs, memory leaks, and side-effects early
  reactStrictMode: true,

  // 3. Set global HTTP security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevents clickjacking attacks
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Stops MIME type sniffing exploits
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Controls referrer data leaks
          },
        ],
      },
    ];
  },
};

export default nextConfig;
