const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

const container = document.getElementById("container");

fetch("http://localhost:3000/livros" + id)
.then(response => response.json())
.then(response => {
    document.title = response.nome

    const div = document.createElement("div");
    const div2 = document.createElement("div");

    const nome = document.createElement("h2");
    const imagem = document.createElement("img");
    const preco = document.createElement("p");
    const descricao = document.createElement("p");

    const btnExcluir = document.createElement("button");
    btnExcluir.setAttribute("id", "btnExcluir");
    btnExcluir.innerText = "Excluir";
    btnExcluir.addEventListener("click", () => {
        fetchExcluir();
    })

    nome.innerText = response.nome;
    preco.innerText = "R$ " + response.preco;
    imagem.src = response.imagem;
    descricao.innerText = response.descricao;

    div.appendChild(imagem);

    div2.appendChild(nome);
    div2.appendChild(preco);
    div2.appendChild(descricao);
    div2.appendChild(btnExcluir);

    container.appendChild(div);
    container.appendChild(div2);
})

function fetchExcluir() {
    fetch("http://localhost:3000/livros" + id, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(response => alert(response.message))
}