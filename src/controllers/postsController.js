import fs from "fs"
import {getTodosPosts, criarPost} from "../models/postsModel.js";

export async function listarPosts(req, res){
    // Chama a função getTodosPosts para obter todos os posts do db.
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
    res.status(200).json(posts);
}

export async function postarPost(req, res) {
    // Extrai os dados do novo post a partir do corpo da requisição
    const novoPost = req.body;

    try {
        // Chama a função `criarPost` para inserir o novo post no banco de dados
        // A função `criarPost` deve estar definida em outro módulo e lidar com a lógica de inserção
        const postCriado = await criarPost(novoPost);
        // Retorna uma resposta HTTP 200 com o objeto do post criado como JSON
        res.status(200).json(postCriado);
    } catch (erro) {
        // Imprime o erro no console para facilitar a depuração
        console.error(erro.message);
        // Retorna uma resposta HTTP 500 com uma mensagem de erro genérica
        res.status(500).json({"Erro:":"Falha na requisicão"})
    }
}

export async function uploadImagem(req, res) {
    // Cria um objeto com os dados do novo post, incluindo a URL da imagem
    const novoPost = {
      descricao: "",
      imgUrl: req.file.originalname, // Considerar usar um nome único para a imagem
      alt: ""
    };
    try {
      // Cria o post no banco de dados
      const postCriado = await criarPost(novoPost);
      // Constrói o caminho completo para a imagem
      const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
      // Move a imagem para o destino final
      fs.renameSync(req.file.path, imagemAtualizada);
      // Retorna uma resposta HTTP 200 com o objeto do post criado como JSON
      res.status(200).json(postCriado);
    } catch (erro) {
      // Imprime o erro no console para facilitar a depuração
      console.error(erro.message);
      // Retorna uma resposta HTTP 500 com uma mensagem de erro genérica
      res.status(500).json({"Erro":"Falha na requisição"})
    }
  }