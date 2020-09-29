module.exports = {
    configureWebpack: {
        externals: {
            chokidar: 'require("chokidar")'
        }
    },
    pluginOptions: {
        electronBuilder: {
          // List native deps here if they don't work
          externals: ['chokidar'],
          nodeModulesPath: ['../../node_modules', './node_modules']
        }
      }
}