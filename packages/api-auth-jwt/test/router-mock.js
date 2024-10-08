class RouterMock {
  constructor() {
    this.optionsRoutes = {};
    this.getRoutes = {};
    this.postRoutes = {};
    this.putRoutes = {};
    this.deleteRoutes = {};
  }

  options(path, route) {
    this.optionsRoutes[path] = [route];
  }

  get(path, route) {
    this.getRoutes[path] = route;
  }

  post(path, route) {
    this.postRoutes[path] = route;
  }

  put(path, route) {
    this.putRoutes[path] = route;
  }

  delete(path, route) {
    this.deleteRoutes[path] = route;
  }
}

module.exports = RouterMock;
