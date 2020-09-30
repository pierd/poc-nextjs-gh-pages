const isProd = (process.env.NODE_ENV || 'production') === 'production'
const path = '/poc-nextjs-gh-pages'

module.exports = {
  basePath: isProd ? path : '',
  assetPrefix: isProd ? path : ''
}