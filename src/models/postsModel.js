import conectarAoBanco from "./src/config/dbConfig.js";


// Cria uma conexão com o banco de dados, utilizando a string de conexão fornecida como variável de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Função assíncrona para obter todos os posts do banco de dados.
export default async function getTodosPosts() {
    // conecta ao banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes"); 
    // Seleciona a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts"); 
    // Retorna todos os documentos (posts) da coleção como um array.
    return colecao.find().toArray()
}