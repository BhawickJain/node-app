const express = require("express");

const app = express();

const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("<hs>Hi There</h2>");
});

app.listen(port, () => console.log(`listening on port ${port}`));
