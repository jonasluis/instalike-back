import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res){
    // Chama a função getTodosPosts para obter todos os posts do db.
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
    res.status(200).json(posts);
}