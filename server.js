import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

// Cria uma conexão com o banco de dados, utilizando a string de conexão fornecida como variável de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Inicializa uma aplicação Express.js
const app = express(); 


// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.
app.listen(3000, () => { 
    console.log("servidor escutando");
}); 

// Função assíncrona para obter todos os posts do banco de dados.
async function getTodosPosts() {
    // conecta ao banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes"); 
    // Seleciona a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts"); 
    // Retorna todos os documentos (posts) da coleção como um array.
    return colecao.find().toArray()
}


// function buscarPostPorID(id) {
//     return posts.findIndex((post) => { //pega um post dentro dos posts
//         return post.id === Number(id) //verifica se o id eh igual ao id que passou no parametro
//     })
// }


// app.get("/posts/:id", (req, res) => {// define a rota com um id especifico
//     const index = buscarPostPorID(req.params.id); // envia o id que passamos como parametro
//     res.status(200).json(posts[index]); //retorna o objeto do post com base no id
// }) 