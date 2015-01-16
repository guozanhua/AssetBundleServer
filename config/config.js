var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'assetbundleserver'
    },
    port: 3000,
    db: 'mongodb://localhost/abs-dev'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'assetbundleserver'
    },
    port: 3000,
    db: 'mongodb://localhost/abs-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'assetbundleserver'
    },
    port: 3000,
    db: 'mongodb://localhost/abs-prod'
    
  }
};

module.exports = config[env];
