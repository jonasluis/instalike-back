import express from "express";

const posts = [
    { 
        descricao: "Uma foto teste", 
        imagem: "https://placecats.com/millie/300/150", 
        id: 1 
    },
    { 
        descricao: "Gato fofo dormindo", 
        imagem: "https://placecats.com/millie/300/150",
        id: 2
    },
    {
        descricao: "Gato olhando pela janela",
        imagem: "https://placecats.com/millie/300/150",
        id: 3
    }
];

const app = express(); // far a constant app ser o servidor
app.use(express.json()); // tranforma tudo que da em json
app.listen(3000, () => { // inicia o server na porta 3000
    console.log("servidor escutando");
}); 

app.get("/posts", (req, res) => {// define a rota com todos objetos
    res.status(200).json(posts)//envia os objetos
}) ;

function buscarPostPorID(id) {
    return posts.findIndex((post) => { //pega um post dentro dos posts
        return post.id === Number(id) //verifica se o id eh igual ao id que passou no parametro
    })
}


app.get("/posts/:id", (req, res) => {// define a rota com um id especifico
    const index = buscarPostPorID(req.params.id); // envia o id que passamos como parametro
    res.status(200).json(posts[index]); //retorna o objeto do post com base no id
}) 