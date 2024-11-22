const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Export the app so it can be used by tests or other modules
module.exports = app;

// Optionally, you can add a separate function to start the server, but not directly in this file.
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}
