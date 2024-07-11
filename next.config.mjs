/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost"],
        remotePatterns: [
            {
                hostname: "localhost",
                pathname: "**",
                port: "3001",
                protocol: "http"
            },
            {
                protocol: "https",
                hostname: "digitalhippo-psi-seven.vercel.app",
            }

        ]
    }
};

export default nextConfig;
