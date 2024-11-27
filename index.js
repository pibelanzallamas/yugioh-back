const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "https://givemeayugiohcard.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  axios
    .get("https://db.ygoprodeck.com/api/v7/randomcard.php")
    .then((resp) => {
      const card = resp.data;
      res.send(card);
    })
    .catch((e) => {
      console.log(e);
      res.send(e);
    });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
