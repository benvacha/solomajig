/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  outputDir: 'deploys',
  devServer: {
    host: 'localhost',
    proxy: 'http://localhost:3000'
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([{
        from: path.join(__dirname, 'statics'),
        to: path.join(__dirname, 'deploys'),
        toType: 'dir',
        ignore: ['index.html', '.DS_Store']
      }])
    ],
    resolve: {
      alias: {
        routes: path.resolve(__dirname, 'routes'),
        stores: path.resolve(__dirname, 'stores'),
        views: path.resolve(__dirname, 'views')
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template =
          path.join(__dirname, 'index.html');
        return args;
      });
  }
};
