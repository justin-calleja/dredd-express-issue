let assert = require('chai').assert;
let hooks = require('hooks');

const transactionNames = {
  cmsRoot: 'CMS API Root > Retrieve the Entry Point',
};

hooks.after(transactionNames.cmsRoot, transaction => {
  let body = JSON.parse(transaction.real.body);
  assert.isString(body['content_objects_url']);
  assert.isString(body['docs_url']);
});
