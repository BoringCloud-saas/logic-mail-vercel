import type { NextConfig } from "next";

module.exports = {
    env: {
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      AUTH_CLIENT_ID: process.env.AUTH_CLIENT_ID,
      AUTH_CLIENT_SECRET: process.env.AUTH_CLIENT_SECRET,
      AUTH_TENANT_ID: process.env.AUTH_TENANT_ID,
    },
};

const nextConfig: NextConfig = {

};

export default nextConfig;
