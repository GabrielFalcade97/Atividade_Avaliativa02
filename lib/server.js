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

  const transporter = nodeMailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "lelah.heathcote18@ethereal.email",
      pass: "FHardfeVwBBeUGtNJZ",
    },
  });


  app.get("/noticia", async (req, res) => {
    const noticias = await storage.getItem("noticias");

    return res.json(noticias);
  });

  app.get("/noticia/:id", async (req, res) => {
    const noticias = (await storage.getItem("noticias")) || [];
    const encontrada = noticias.find((noticia) => noticia.id === req.params.id);
    res.json(encontrada);
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

  app.post("/inscricao", async (req, res) => {
    const jaCadastrados = (await storage.getItem("inscricoes")) || [];
    const emailCadastrado = jaCadastrados.some(
      (cadastro) => cadastro.email === req.body.email
    );

    if (!emailCadastrado) {
      const novoCadastro = { email: req.body.email, id: uuid() };
      jaCadastrados.push(novoCadastro);
      await storage.setItem("inscricoes", jaCadastrados);
      return res.json(novoCadastro);
    }

    return res.json("Erro no cadastro");
  });

  app.put("/enviar/:id", async (req, res) => {
    const noticias = (await storage.getItem("noticias")) || [];

    const noticiaExiste = noticias.find(
      (noticia) => noticia.id === req.params.id
    );
    let emailEnviados = [];
    if (noticiaExiste) {
      const inscricoes = await storage.getItem("inscricoes");

      if (inscricoes.length === 0) {
        result = { message: "Não há emails cadastrados" };
      } else {
        while (inscricoes.length > 0) {
          await new Promise((resolve, reject) => {
            setTimeout(async () => {
              const inscricao = inscricoes.pop();

              try {
                await transporter.sendMail({
                  from: '"Atividade" <atividade2@email.com>',
                  to: inscricao.email,
                  subject: noticiaExiste.titulo,
                  text: `${noticiaExiste.resumo} \n ${noticiaExiste.url}`,
                });
                emailEnviados.push(inscricao);
                resolve();
              } catch (error) {
                reject(error);
              }
            }, 2000);
          });
        }
        result = emailEnviados;
      }
    } else {
      result.message = `Noticia com id '${id}' não cadastrada`;
    }
    return res.json(result);
  });

  app.listen(port, () => {
    console.log(`O Servidor está rodando na porta ${port}`);
  });
}
server();
