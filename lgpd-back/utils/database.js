import { Sequelize } from "sequelize";

// Crie a instância do Sequelize com as configurações apropriadas
const sequelize = new Sequelize(
    "lgpd-database",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
        define: {
            timestamps: false
        }
    }
);

// Exporte a instância do Sequelize, não a classe Sequelize
export default sequelize;

