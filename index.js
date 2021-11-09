const express = require("express");
const app = express();

//--Website Here--\\
//404 Webpage
app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + "/public/404.html")
});

app.listen(8080);