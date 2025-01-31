const express = require("express");
const path = require("path");
const app = express();

// Index route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// About route
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

// Contact Me route
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

// 404 route
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
