import express from "express";



// Inicializa uma aplicação Express.js
const app = express(); 


// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.
app.listen(3000, () => { 
    console.log("servidor escutando");
}); 




// function buscarPostPorID(id) {
//     return posts.findIndex((post) => { //pega um post dentro dos posts
//         return post.id === Number(id) //verifica se o id eh igual ao id que passou no parametro
//     })
// }


// app.get("/posts/:id", (req, res) => {// define a rota com um id especifico
//     const index = buscarPostPorID(req.params.id); // envia o id que passamos como parametro
//     res.status(200).json(posts[index]); //retorna o objeto do post com base no id
// }) 