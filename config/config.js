var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'notesrs-backend'
    },
    port: 3000,
    db: 'mongodb://localhost/notesrs-backend-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'notesrs-backend'
    },
    port: 3000,
    db: 'mongodb://localhost/notesrs-backend-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'notesrs-backend'
    },
    port: 3000,
    db: 'mongodb://localhost/notesrs-backend-production'
  }
};

module.exports = config[env];
