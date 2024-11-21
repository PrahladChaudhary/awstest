// Import Express
const express = require("express");
const app = express();

// Define a port
const PORT = 3000;

// Set up a basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js Sample App!");
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is listening on port ${PORT} from any IP address.`);
});
