let express = require('express');
let bodyParser = require('body-parser');

module.exports = function() {
  let server = express();
  server.use(bodyParser.json());
  let rootRouter = express.Router();

  rootRouter.get('/', function(req, res) {
    return res.status(200).json({
      'content_objects_url': '/content-objects',
      'docs_url': '/docs'
    });
  });

  server.use('/', rootRouter);

  return server;
};
