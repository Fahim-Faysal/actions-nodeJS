const request = require('supertest');
const app = require('../app');

describe('App test', () => {
  it('should return greeting message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hello from Node CI/CD');
  });
});
