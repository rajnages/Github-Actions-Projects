const request = require('supertest');
const app = require('../src/app');  // Importing the Express app from src/app.js
let server;

describe('GET /', () => {
  beforeAll((done) => {
    // Start the server before running tests
    server = app.listen(8080, done);
  });

  afterAll((done) => {
    // Close the server after tests are done
    server.close(done);
  });

  it('should return 200 OK and "Hello, world!"', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});
