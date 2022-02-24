/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`,
      },
      {
        source: "/api/movies/:movieId",
        destination: `https://api.themoviedb.org/3/movie/:movieId?api_key=${API_KEY}&language=ko-KR`,
      },
    ];
  },
};

module.exports = nextConfig;
