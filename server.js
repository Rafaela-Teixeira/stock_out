const express = require("express");
const cors = require("cors")

const app = express();

const Usuario = [
    {
        id : 1,
        nome: "João",
        idade : 24
    },
    {
        id : 2,
        nome: "Rafaela",
        idade : 23
    },
    {
        id : 3,
        nome: "Priscila",
        idade : 36
    },
];

app.use(cors());
app.use(express.json());

app.get("/Usuario", (request, response)=>{
    return response.json(Usuario);
})

app.listen(3333, retorna("stock_out"))

function retorna(nomeDoSistema){
    console.log("O servidor esta ligado para o sistema " + nomeDoSistema)
}