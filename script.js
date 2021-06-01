const express = require("express");
// import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  setTimeout(() => {
    res.send("OK");
  }, 5000);
});

app.listen(port, () =>
  console.log(`App is listening on  http://localhost:${port}/`)
);
