let assert = require('chai').assert;
let hooks = require('hooks');
let serverFactory = require('../testServerFactory');

const PORT = 3000;

hooks.beforeAll(function(transactions, done) {

  return serverFactory().listen(PORT, function() {
    console.log(`Server up and listening on port: ${PORT}`);
    return done();
  });

});
