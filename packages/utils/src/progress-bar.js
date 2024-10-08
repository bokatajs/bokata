class ProgressBar {
  constructor(fmt, options = {}) {
    if (typeof options === 'number') {
      options = { total: options };
    }
    this.fmt = fmt === undefined ? ':bar :etas' : fmt;
    this.stream = options.stream || process.stderr;
    this.curr = 0;
    this.total = options.total || 100;
    this.width = options.width || Math.min(this.total, 50);
  }

  tick(len) {
    if (this.curr === 0) {
      this.start = Date.now();
    }
    this.curr += len;
    this.render();
    if (this.curr >= this.total) {
      this.complete = true;
      this.stream.write('\n');
    }
  }

  generateStr(eta, ratio) {
    const fmteta = Number.isNaN(eta) || !Number.isFinite(eta) ? 0 : eta / 1000;
    const str = this.fmt.replace(':eta', fmteta.toFixed(1)).replace(':percent', `${(ratio * 100).toFixed(0)}%`);
    const availableSpace = Math.max(0, this.stream.columns - str.replace(':bar', '').length);
    const width = Math.min(this.width, availableSpace);
    const len = Math.max(0, Math.round(width * ratio));
    const complete = new Array(len + 1).join('▓');
    const incomplete = new Array(width - len + 1).join('░');
    return str.replace(':bar', `${complete}${incomplete}`);
  }

  reline(str) {
    this.stream.cursorTo(0);
    this.stream.write(str);
    this.stream.clearLine(1);
    this.lastDraw = str;
  }

  render() {
    const ratio = Math.min(Math.max(this.curr / this.total, 0), 1);
    const eta = ratio >= 1 ? 0 : (Date.now() - this.start) * (this.total / this.curr - 1);
    const str = this.generateStr(eta, ratio);
    if (this.lastDraw !== str) {
      this.reline(str);
    }
  }
}

module.exports = ProgressBar;
