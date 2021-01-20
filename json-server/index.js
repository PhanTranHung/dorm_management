const jsonServer = require('json-server');
const path = require('path');

function createServer(port) {
  const server = jsonServer.create();
  const router = jsonServer.router(path.join(__dirname, 'db.json'));
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);
  server.listen(port, () => {
    console.log('JSON Server is running on', port);
  });

  return server;
}

module.exports = createServer;
