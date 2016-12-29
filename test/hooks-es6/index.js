import { assert } from 'chai';
import hooks from 'hooks';
import serverFactory from '../testServerFactoryES6';
import initRootHooks from './root-hooks';
import initContentObjectHooks from './content-object-hooks';

const PORT = 3000;

hooks.beforeAll(function(transactions, done) {

  return serverFactory().listen(PORT, function() {
    console.log(`Server up and listening on port: ${PORT}`);
    initRootHooks({ hooks, assert });
    initContentObjectHooks({ hooks, assert });
    return done();
  });

});
