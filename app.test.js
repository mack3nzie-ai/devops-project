const request = require('supertest');
const app = require('./app');

describe('Unit Tests - Application Endpoints', () => {
  it('GET / harus mengembalikan status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  it('GET /health harus mengembalikan status 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
  });
});