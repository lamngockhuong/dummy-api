const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const customRoutes = jsonServer.rewriter(require('./routes.json'));
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(customRoutes);
server.use(router);
server.listen(port, () => {
  console.log('Dummy API Server is running!')
})
