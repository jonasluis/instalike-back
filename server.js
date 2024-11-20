import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

// Cria uma conexão com o banco de dados, utilizando a string de conexão fornecida como variável de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Inicializa uma aplicação Express.js
const app = express(); 
//Permite que o servidor interprete as requisições com corpo JSON. Tranforma tudo que da em json
app.use(express.json());
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
// Define uma rota GET para a URL "/posts".
app.get("/posts", async (req, res) => {
    // Chama a função getTodosPosts para obter todos os posts do db.
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
    res.status(200).json(posts)//envia os objetos
}) ;

// function buscarPostPorID(id) {
//     return posts.findIndex((post) => { //pega um post dentro dos posts
//         return post.id === Number(id) //verifica se o id eh igual ao id que passou no parametro
//     })
// }


// app.get("/posts/:id", (req, res) => {// define a rota com um id especifico
//     const index = buscarPostPorID(req.params.id); // envia o id que passamos como parametro
//     res.status(200).json(posts[index]); //retorna o objeto do post com base no id
// }) 