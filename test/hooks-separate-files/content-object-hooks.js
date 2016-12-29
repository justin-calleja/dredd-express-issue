let hooks = require('hooks');

const transactionNames = {
  createContentObject: 'ContentObjects routes > ContentObject collection > Create ContentObject',
  readContentObject: 'ContentObjects routes > ContentObject > Read a ContentObject',
  deleteContentObject: 'ContentObjects routes > ContentObject > Delete ContentObject',
  readPaginatedContentObjects: 'ContentObjects routes > ContentObject collection > Read paginated ContentObjects',
  createNewContentObjectVersion: 'ContentObjects routes > ContentObject > Create new ContentObject version'
};

const { before } = hooks;

before(transactionNames.createContentObject, transaction => {
  transaction.skip = true;
});

before(transactionNames.deleteContentObject, transaction => {
  transaction.skip = true;
});

before(transactionNames.readContentObject, transaction => {
  transaction.skip = true;
});

before(transactionNames.readPaginatedContentObjects, transaction => {
  transaction.skip = true;
});

before(transactionNames.createNewContentObjectVersion, transaction => {
  transaction.skip = true;
});
