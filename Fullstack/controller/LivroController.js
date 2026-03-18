const express = require('express');
const router = express.Router();
const Livro = require('../model/Livro.js');

// get todos os livros
router.get('/', async (req, res) => {
    try {
        const livros = await Livro.findAll();
        res.json(livros)
    } catch (err) {
        res.status(500).json({error: 'Erro ao buscar livros.'});
    }
});

// get livro por id
router.get('/:id', async (req, res) => {
    try {
        const livro = await Livro.findByPK(req.params.id);
        if (livro) {
            res.json(livro);
        } else {
            res.status(404).json({error: 'livro não encontrado'});
        }
    } catch (err) {
        res.status(500).json({error: 'Erro ao buscar livro.'});
    }
});

// método post
router.post('/', async (req, res) => {
    try {
        const {nome, imagem, descricao, preco } = req.body;
        const novoLivro = await Livro.create({nome, imagem, descricao, preco});
        res.status(201).json(novoLivro);
    } catch (err){
        res.status(500).json({error: 'Erro ao criar livro.'})
    }
});

// método delete
router.delete('/:id', async (req, res) => {
    try {
        const livro = await Livro.findByPK(req.params.id);
        if (livro) {
            await livro.destroy();
            res.json({message: 'livro deletaod com sucesso.'});
        } else {
            res.status(404).json({error: 'livro não encontrado.'})
        }
    } catch (err) {
        res.status(500).json({error: 'Erro ao deletar livro.'});
    }
});

module.exports = router;