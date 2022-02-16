const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`Saporra ta rodando na porta ${port} via docker meu parceiro!`);
});

app.listen(port, () => {
  console.log(`Ta rodando na porta ${port}`);
});
