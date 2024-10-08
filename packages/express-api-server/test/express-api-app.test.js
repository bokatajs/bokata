const request = require('supertest');
const { ExpressApiApp } = require('../src');

describe('ExpressApiApp', () => {
  describe('Constructor', () => {
    test('Constructor', () => {
      const expressApp = new ExpressApiApp();
      expect(expressApp).toBeDefined();
    });
  });

  describe('Static files', () => {
    test('The `/` URI should return a HTML page', async () => {
      const expressApp = new ExpressApiApp({ serveBot: true });
      const app = expressApp.initialize();
      const resp = await request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /\/html/)
        .expect('access-control-allow-origin', '*')
        .expect('x-powered-by', 'Express');

      expect(resp.statusCode).toBe(200);
      expect(resp.text).toMatch(/^<!doctype html>\s*<html lang="\w+">.+<title>/ms);
      expect(resp.text).toMatch(/<div id="root" role="main">/);
      expect(resp.text).toMatch(/<script src="main.js">/);
    });

    test('The `/main.js` URI should return Javascript', async () => {
      const expressApp = new ExpressApiApp({ serveBot: true });
      const app = expressApp.initialize();
      const resp = await request(app)
        .get('/main.js')
        .expect(200)
        .expect('Content-Type', /\/javascript/);

      expect(resp.statusCode).toBe(200);
      expect(resp.text).toMatch(/window\.directline/);
      expect(resp.text).toMatch(/\.createElement\(/);
      expect(resp.text).toMatch(/function\(/);
    });

    test('The `/botchat.css` URI should return a stylesheet', async () => {
      const expressApp = new ExpressApiApp({ serveBot: true });
      const app = expressApp.initialize();
      const resp = await request(app).get('/botchat.css').expect(200).expect('Content-Type', /\/css/);

      expect(resp.statusCode).toBe(200);
      expect(resp.text).toMatch(/body\s*\{.+\}/ms);
      expect(resp.text).toMatch(/font-family:[\w\s-,]+,sans-serif;/i);
    });
  });

  describe('API with NO routers', () => {
    test('In isolation, the `/api` path should give a "404 Not Found" error', async () => {
      const expressApp = new ExpressApiApp({ apiRoot: '/api' });
      const app = expressApp.initialize();
      const resp = await request(app).get('/api').expect(404).expect('Content-Type', /html/);

      expect(resp.statusCode).toBe(404);
      expect(resp.text).toMatch(/^<!DOCTYPE html>.+Error.+/ims);
    });
  });

  describe('API with a router', () => {
    test('The path `/api/testId/{N}` should return JSON data', async () => {
      const TEST_ID = '999';
      const testRouter = ExpressApiApp.newRouter();
      testRouter.get('/testId/:testId', (req, res, next) => {
        res.send(req.params);
        next();
      });
      const expressApp = new ExpressApiApp({ apiRoot: '/api' }, null, [testRouter]);
      const app = expressApp.initialize();
      const resp = await request(app)
        .get(`/api/testId/${TEST_ID}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)
        .expect('access-control-allow-origin', '*');

      expect(resp.statusCode).toBe(200);
      expect(resp.text).toMatch(/^\{.+\}$/);
      expect(resp.body.testId).toBe(TEST_ID);
    });
  });

  describe('A plugin', () => {
    test('A valid URI should return content', async () => {
      const testPlugin = (req, res, next) => {
        res.set('x-plugin-test', '1');
        next();
      };
      const expressApp = new ExpressApiApp({ serveBot: true }, [testPlugin]);
      const app = expressApp.initialize();
      const resp = await request(app).get('/').expect(200).expect('x-plugin-test', '1');

      expect(resp.statusCode).toBe(200);
    });
  });
});
