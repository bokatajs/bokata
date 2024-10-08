class ResMock {
  status(value) {
    this.statusValue = value;
    return this;
  }

  send(value) {
    this.sendValue = value;
    if (this.callback) {
      this.callback(undefined, 'ok');
    }
    return this;
  }

  json(value) {
    this.sendValue = value;
    if (this.callback) {
      this.callback(undefined, 'ok');
    }
    return this;
  }
}

module.exports = ResMock;
