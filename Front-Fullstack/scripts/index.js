const url = "http://localhost:3000/livros";
const container = document.getElementById("container");

async function buscarTodos() {
    const response = await fetch(url);
    const data = await response.json();

    data.map((livro) => {

        const div = document.createElement("div");
        const nome = document.createElement("h2");
        const imagem = document.createElement("img");
        const preco = document.createElement("p");
        const link = document.createElement("a");

        nome.innerText = livro.nome;
        preco.innerText = "R$ " + livro.preco;
        imagem.src = livro.imagem;
        link.innerText = "Mais informações";
        link.setAttribute("href", `livro.html?id=${livro.id}`)

        div.appendChild(nome);
        div.appendChild(preco);
        div.appendChild(imagem);
        div.appendChild(link);

        container.appendChild(div);
    })
}

buscarTodos();