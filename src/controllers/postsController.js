import {getTodosPosts, criarPost} from "../models/postsModel.js";

export async function listarPosts(req, res){
    // Chama a função getTodosPosts para obter todos os posts do db.
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
    res.status(200).json(posts);
}

export async function postarPost(req, res) {
    const novoPost = req.body;

    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro:":"Falha na requisicão"})
    }
}