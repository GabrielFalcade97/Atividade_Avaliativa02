const axios = require("axios");

const api = axios.create({
  baseURL: "http://127.0.0.1:3333",
});

// Cria Noticia #1
api
  .post("/noticia", {
    titulo: "Título 1",
    resumo: "Esse é o resumo do texto 1",
    url: "http://noticia1.com",
  })
  .then(({ data }) => {
    console.log("Noticia #1 criada", JSON.stringify(data, null, 2));
  })
  .catch((error) => console.error("Erro ao criar noticia #1", error));

// Cria Noticia #2
api
  .post("/noticia", {
    titulo: "Título 2",
    resumo: "Esse é o resumo do texto 2",
    url: "http://noticia2.com",
  })
  .then(({ data }) => {
    console.log("Noticia #2 criada", JSON.stringify(data, null, 2));
  })
  .catch((error) => console.error("Erro ao criar noticia #2", error));

// Cria Noticia #3
api
  .post("/noticia", {
    titulo: "Título 3",
    resumo: "Esse é o resumo do texto 3",
    url: "http://noticia3.com",
  })
  .then(({ data }) => {
    console.log("Noticia #3 criada", JSON.stringify(data, null, 2));
  })
  .catch((error) => console.error("Erro ao criar noticia #3", error));

// Cria Noticia #4
api
  .post("/noticia", {
    titulo: "Título 4",
    resumo: "Esse é o resumo do texto 4",
    url: "http://noticia4.com",
  })
  .then(({ data }) => {
    console.log("Noticia #4 criada", JSON.stringify(data, null, 2));
  })
  .catch((error) => console.error("Erro ao criar noticia #4", error));

// Cria Noticia #5
api
  .post("/noticia", {
    titulo: "Título 5",
    resumo: "Esse é o resumo do texto 5",
    url: "http://noticia5.com",
  })
  .then(({ data }) => {
    console.log("Noticia #5 criada", JSON.stringify(data, null, 2));
  })
  .catch((error) => console.error("Erro ao criar noticia #5", error));

// Cadastrar Email #1
api
  .post("/inscricao", { email: "teste@gmail.com" })
  .then(({ data }) => {
    console.log("Email #1 cadastrado", JSON.stringify(data, null, 2));
  })
  .catch((error) => console.error("Erro ao cadastrar email #1", error));

// Cadastrar Email #2
api
  .post("/inscricao", { email: "teste_123@gmail.com" })
  .then(({ data }) => {
    console.log("Email #2 cadastrado", JSON.stringify(data, null, 2));
  })
  .catch((error) => console.error("Erro ao cadastrar email #2", error));

// Cadastrar Email #3
api
  .post("/inscricao", { email: "teste312@gmail.com" })
  .then(({ data }) => {
    console.log("Email #3 cadastrado", JSON.stringify(data, null, 2));
  })
  .catch((error) => console.error("Erro ao cadastrar email #3", error));

// Cadastrar Email #4
api
  .post("/inscricao", { email: "gabriel@gmail.com" })
  .then(({ data }) => {
    console.log("Email #4 cadastrado", JSON.stringify(data, null, 2));
  })
  .catch((error) => console.error("Erro ao cadastrar email #4", error));

// Cadastrar Email #5
api
  .post("/inscricao", { email: "lucas@gmail.com" })
  .then(({ data }) => {
    console.log("Email #5 cadastrado", JSON.stringify(data, null, 2));
  })
  .catch((error) => console.error("Erro ao cadastrar email #5", error));

// Cadastrar Email #6
api
  .post("/inscricao", { email: "pedro@gmail.com" })
  .then(({ data }) => {
    console.log("Email #6 cadastrado", JSON.stringify(data, null, 2));
  })
  .catch((error) => console.error("Erro ao cadastrar email #6", error));

// Cadastrar Email #7
api
  .post("/inscricao", { email: "nasser@gmail.com" })
  .then(({ data }) => {
    console.log("Email #7 cadastrado", JSON.stringify(data, null, 2));
  })
  .catch((error) => console.error("Erro ao cadastrar email #7", error));
