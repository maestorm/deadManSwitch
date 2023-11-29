const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    compiler: {
        styledComponents: {
            ssr: true,
        },
    },
}

module.exports = nextConfig;