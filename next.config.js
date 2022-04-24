/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://grades_admin:wjpqGrPKBsdcMsbw@cluster0.50b0g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
