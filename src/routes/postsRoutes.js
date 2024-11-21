import express from "express";
import { listarPosts,  postarPost } from "../controllers/postsController.js";

const routes = (app) => {
    //Permite que o servidor interprete as requisições com corpo JSON. Tranforma tudo que da em json
    app.use(express.json());

    // Define uma rota GET para a URL "/posts".
    app.get("/posts", listarPosts);
    app.post("/posts",  postarPost);
}

export default routes;
