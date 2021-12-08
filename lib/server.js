const express = require("express");
const storage = require("node-persist");
const { uuid } = require("uuidv4");
const cors = require("cors");
const nodeMailer = require("nodemailer");

async function server() {
  const port = process.env.PORT || 3333;

  const app = express();

  app.use(cors());
  app.use(express.json());

  await storage.init({
    dir: "../db",
    stringify: JSON.stringify,
    parse: JSON.parse,
    encoding: "utf8",
  });

  app.get("/noticia", async (req, res) => {
    const noticias = await storage.getItem("noticias");

    return res.json(noticias);
  });

  app.post("/noticia", async (req, res) => {
    const newNoticia = {
      titulo: req.body.titulo,
      resumo: req.body.resumo,
      url: req.body.url,
      id: uuid(),
    };
    const noticias = (await storage.getItem("noticias")) || [];
    noticias.push(newNoticia);

    await storage.setItem("noticias", noticias);
    return res.json(newNoticia);
  });

  app.listen(port, () => {
    console.log(`O Servidor está rodando na porta ${port}`);
  });
}
server();