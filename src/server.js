const express = require("express");

const app = express(); // Chamando a função express para poder ligar o servidor.
app.use(express.json()); // Usar o padrão JSON para mandar dados

let Usuarios = [];

app.post("/Usuario", (request, response) => {
  const { id, nome, idade, cpf, tipo } = request.body;

  const usuario = {
    id: id,
    nome: nome,
    idade: idade,
    cpf: cpf,
    tipo: tipo,
  };

  Usuarios.push(usuario);
  response.send("Usuario adicionado!");
});

app.get("/Usuario", (request, response) => {
  return response.json(Usuarios);
});

app.put("/Usuario", (request, response) => {
  const { id, nome } = request.body;

  Usuarios.forEach((usuario) => {
    if (usuario.id === id) {
      usuario.nome = nome;
    }
  });

  response.json(Usuarios);
});

app.listen(3333, () => {
  console.log("Server is running");
});
