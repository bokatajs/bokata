const fs = require('fs');
const http = require('http');
const https = require('https');
const HttpsProxyAgent = require('https-proxy-agent');
const path = require('path');
const tar = require('tar');
const url = require('url');
const ProgressBar = require('./progress-bar');
const { getAbsolutePath } = require('./fs-extra');

class Downloader {
  constructor(settings = {}) {
    this.dir = getAbsolutePath(settings.dir || './.downloads');
    this.replicateAllFolders = settings.replicateAllFolders === undefined ? false : settings.replicateAllFolders;
    this.replaceIfExists = settings.replaceIfExists === undefined ? true : settings.replaceIfExists;
    this.showProgress = settings.showProgress === undefined ? true : settings.showProgress;
    this.automaticUntar = settings.automaticUntar === undefined ? true : settings.automaticUntar;
    this.proxy = settings.proxy;
    if (this.proxy === undefined) {
      this.proxy =
        process.env.http_proxy || process.env.https_proxy || process.env.HTTP_PROXY || process.env.HTTPS_PROXY;
    }
    if (this.proxy) {
      this.agent = new HttpsProxyAgent(this.proxy);
    }
  }

  static ensureDir(dirPath, recursive = true) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive });
    }
  }

  download(urlPath, filePath) {
    return new Promise((resolve, reject) => {
      const parsed = url.parse(urlPath);
      let relativePath = filePath;
      if (!relativePath) {
        relativePath = this.replicateAllFolders ? parsed.pathname.slice(1) : path.basename(parsed.pathname);
      }
      const absolutePath = getAbsolutePath(relativePath, this.dir);
      if (fs.existsSync(absolutePath) && !this.replaceIfExists) {
        // eslint-disable-next-line no-promise-executor-return
        return resolve('Already exists');
      }
      const isTar = absolutePath.endsWith('.tar.gz') || absolutePath.endsWith('.tgz');
      const downloadDir = path.parse(absolutePath).dir;
      Downloader.ensureDir(downloadDir);
      const proto = parsed.protocol === 'https:' ? https : http;
      let { port } = parsed;
      if (!port) {
        port = parsed.protocol === 'https:' ? 443 : 80;
      }
      const options = {
        host: parsed.hostname,
        port,
        path: parsed.pathname,
        agent: this.agent,
      };
      const file = fs.createWriteStream(absolutePath);
      let fileInfo;
      const request = proto.request(options, (response) => {
        if (response.statusCode < 200 || response.statusCode >= 300) {
          return reject(new Error(`Failed to get ${urlPath} (${response.statusCode})`));
        }
        fileInfo = {
          mime: response.headers['content-type'],
          size: parseInt(response.headers['content-length'], 10),
        };
        return response.pipe(file);
      });

      request.on('response', (res) => {
        if (this.showProgress) {
          const len = parseInt(res.headers['content-length'], 10);
          const bar = new ProgressBar('downloading :bar :etas', len);
          res.on('data', (chunk) => bar.tick(chunk.length));
          res.on('end', () => console.log('\n'));
        }
      });
      file.on('finish', () => {
        if (isTar) {
          tar.x({ file: absolutePath, strip: 1, C: downloadDir }).then(() => resolve(fileInfo));
        } else {
          resolve(fileInfo);
        }
      });

      file.on('error', (err) => {
        fs.unlink(absolutePath, () => reject(err));
      });
      request.on('error', (err) => {
        fs.unlink(absolutePath, () => reject(err));
      });
      // eslint-disable-next-line no-promise-executor-return
      return request.end();
    });
  }
}

module.exports = Downloader;
