import express from "express";
import pkg from "body-parser";
import router from "./routes/router.js";

import Sequelize from "./utils/database.js";
import associations from "./models/Associations.js";

import cors from "cors";

const app = express();
const { json, urlencoded } = pkg;

// Middleware para parsing de JSON e URL encoded
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

// Definindo a porta a partir da variável de ambiente ou usando 3000 como padrão
const PORT = process.env.PORT || 3000;

// Função assíncrona para inicializar o banco de dados e iniciar o servidor
(async () => {
    try {
        // Configurando associações entre modelos
        associations.associations();

        // Sincronizando o banco de dados
        await Sequelize.sync();

        // Iniciando o servidor na porta especificada
        app.listen(PORT, () => {
            console.log(`Servidor iniciado na porta ${PORT}`);
        });

    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
    }
})();

// Rota principal
app.use("/", router);
