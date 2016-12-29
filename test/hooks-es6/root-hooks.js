const transactionNames = {
  cmsRoot: 'CMS API Root > Retrieve the Entry Point',
};

export default ({ hooks, assert }) => {

  hooks.after(transactionNames.cmsRoot, transaction => {
    let body = JSON.parse(transaction.real.body);
    assert.isString(body['content_objects_url']);
    assert.isString(body['docs_url']);
  });

};

