const RouterMock = require('./router-mock');

class ApiServerMock {
  constructor() {
    this.plugins = [];
    this.routers = [];
  }

  newRouter() {
    return new RouterMock();
  }

  call(method, path, req, res, next) {
    for (let i = 0; i < this.routers.length; i += 1) {
      const router = this.routers[i];
      const methodRoutes = router[`${method.toLowerCase()}Routes`];
      if (methodRoutes && methodRoutes[path]) {
        methodRoutes[path](req, res, next);
      }
    }
  }
}

module.exports = ApiServerMock;
