const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from SDA Lab 13 — running inside a Docker container!");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/api/students", (req, res) => {
  res.json([
    { id: 1, name: "Arslan", program: "BESE-15" },
    { id: 2, name: "Ali",    program: "BESE-15" },
    { id: 3, name: "Sara",   program: "BESE-15" }
  ]);
});

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
