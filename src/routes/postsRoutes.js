import express from "express";// Importa o framework Express para criar a aplicação web
import multer from "multer";// Importa o Multer para lidar com uploads de arquivos
import { listarPosts,  postarPost, uploadImagem } from "../controllers/postsController.js";// Importa as funções controladoras para lidar com a lógica dos posts

// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Especifica o diretório para armazenar as imagens enviadas
      cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
    },
    filename: function (req, file, cb) {
      // Mantém o nome original do arquivo por simplicidade
      cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
    }
  });
// Cria uma instância do middleware Multer
const upload = multer({ storage: storage });
//se utilizar linux ou mac apenas ultilizar o codigo abaixo sem storage
//const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    //Permite que o servidor interprete as requisições com corpo JSON. Tranforma tudo que da em json
    app.use(express.json());

    // Define uma rota GET para a URL "/posts" que busca todos os posts.
    app.get("/posts", listarPosts);
    // Define uma rota POST para a URL "/posts" que envia/criar os posts.
    app.post("/posts",  postarPost);
    // Define uma rota POST para a URL "/upload" assumindo uma única imagem chamada "imagem".
    app.post("/upload", upload.single("imagem"), uploadImagem);
}

export default routes;
