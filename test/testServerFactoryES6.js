import express from 'express';
import bodyParser from 'body-parser';

export default function() {
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
