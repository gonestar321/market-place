/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "market-place-production-897a.up.railway.app",
			},
		],
	},
};

module.exports = nextConfig;
