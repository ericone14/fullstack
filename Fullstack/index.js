const express = require('express');
const sequelize = require('./database/db.js');
const cors = require('cors');
const livroController = require('./controller/LivroController.js');

const app = express();
const PORT = 3050;

app.use(express.json());
app.use(cors());

app.use('/livros', livroController);

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com MySQL estabelecida.');

        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao iniciar o servidor:' + error);
    }

}

startServer();