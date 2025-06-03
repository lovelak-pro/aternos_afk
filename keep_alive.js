const express = require("express");
const app = express();
const port = 2323;
app.get("/", (req, res) => res.send("AFK bot is running!"));
app.listen(port, () =>
  console.log(`[AFK BOT] Keep-alive server on port ${port}`)
);
