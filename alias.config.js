// alias.config.js
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  resolve: {
    alias: {
      'components': resolve('src/components'),
      'common': resolve('src/common'),
      'api': resolve('src/api')
    }
  }
}
