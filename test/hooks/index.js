let assert = require('chai').assert;
let hooks = require('hooks');
let serverFactory = require('../testServerFactory');
let initRootHooks = require('./root-hooks');
let initContentObjectHooks = require('./content-object-hooks');

const PORT = 3000;

hooks.beforeAll(function(transactions, done) {

  return serverFactory().listen(PORT, function() {
    console.log(`Server up and listening on port: ${PORT}`);
    initRootHooks({ hooks, assert });
    initContentObjectHooks({ hooks, assert });
    return done();
  });

});
