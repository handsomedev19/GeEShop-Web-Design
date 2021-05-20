const withReactSvg = require('next-react-svg')
const path = require('path')
const withImages = require('next-images')
module.exports = withImages()

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config, options) {
    return config
  }
})
module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
    devIndicators:{
      autoPrerender:false,
    }
   
  };