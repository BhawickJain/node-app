const express = require("express");

const app = express();

// PORT as spelled in .env
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<hs>Hi There!!!!!</h2>");
});

app.listen(port, () => console.log(`listening on port ${port}`));
