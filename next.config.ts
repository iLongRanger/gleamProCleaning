import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/service-areas/:slug/commercial-cleaning",
        destination: "/service-areas/:slug",
        permanent: true,
      },
      {
        source: "/service-areas/:slug/residential-cleaning",
        destination: "/service-areas/:slug",
        permanent: true,
      },
      {
        source: "/service-areas/:slug/restaurants",
        destination: "/commercial-cleaning/restaurants",
        permanent: true,
      },
      {
        source: "/service-areas/:slug/offices",
        destination: "/commercial-cleaning/offices",
        permanent: true,
      },
      {
        source: "/service-areas/:slug/community-facilities",
        destination: "/commercial-cleaning/community-facilities",
        permanent: true,
      },
      {
        source: "/service-areas/:slug/property-management",
        destination: "/commercial-cleaning/property-management",
        permanent: true,
      },
      {
        source: "/service-areas/:slug/recurring",
        destination: "/residential-cleaning/recurring",
        permanent: true,
      },
      {
        source: "/service-areas/:slug/deep-cleaning",
        destination: "/residential-cleaning/deep-cleaning",
        permanent: true,
      },
      {
        source: "/service-areas/:slug/move-in-out",
        destination: "/residential-cleaning/move-in-out",
        permanent: true,
      },
      {
        source: "/service-areas/:slug/carpet-upholstery",
        destination: "/residential-cleaning/carpet-upholstery",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
