import express from "express";

const routes = (app) => {
    //Permite que o servidor interprete as requisições com corpo JSON. Tranforma tudo que da em json
    app.use(express.json());

    // Define uma rota GET para a URL "/posts".
    app.get("/posts", async (req, res) => {
        // Chama a função getTodosPosts para obter todos os posts do db.
        const posts = await getTodosPosts();
        // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
        res.status(200).json(posts);//envia os objetos
    }) ;
}

export default routes;
