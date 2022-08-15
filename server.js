const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(process.env.DB_PATH || './db.json');
const customRoutes = jsonServer.rewriter(require(process.env.ROUTES_PATH || './routes.json'));
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(customRoutes);
server.use(router);
server.listen(port, () => {
  console.log('Dummy API Server is running!')
})
