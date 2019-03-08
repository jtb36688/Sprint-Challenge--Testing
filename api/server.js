const express = require("express");
const db = require("../games/gamesModule.js");

const server = express();

server.use(express.json());

server.post("/api", (req, res) => {
  const { name, genre, year } = req.body;
  const addition = { name };
  if (!name || !genre) {
    return res
      .status(422)
      .json({ error: "Please provide a name and genre for your addition" });
  }
  db.add(table, addition)
    .then(add => {
      res.status(201).json(add);
    })
    .catch(({ code, message }) => {
      res.status(code).json({ message });
    });
});

module.exports = server;