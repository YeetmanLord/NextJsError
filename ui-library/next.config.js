const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/scss')],
    },
    images: {
        domains: ['localhost', 'media.licdn.com', 'billgoodmarketing.com']
    }
}

module.exports = nextConfig
