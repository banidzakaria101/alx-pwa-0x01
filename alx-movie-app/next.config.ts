import withPAWInit from "@ducanh2912/next-pwa";

const withPaw = withPAWInit({
  dest: 'public'
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
};

export default withPaw({
  ...nextConfig
});