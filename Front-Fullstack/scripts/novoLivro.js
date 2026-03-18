const url = "http://localhost:3000/livros";

const nome = document.getElementById("nome");
const imagem = document.getElementById("imagem");
const descricao = document.getElementById("descricao");
const preco = document.getElementById("preco");
const btnCriar = document.getElementById("btnCriar");

btnCriar.addEventListener("click", (e) => {
    e.preventDefault()

    const data = {
        nome: nome.value,
        imagem: imagem.value,
        descricao: descricao.value,
        preco: preco.value
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => alert(`Livro ${res.nome} adicionado com sucesso.`));
})