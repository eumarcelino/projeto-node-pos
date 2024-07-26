import {DataTypes} from "sequelize";
import Sequelize from "../utils/database.js";

const Evaluation = Sequelize.define("evaluations", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    concept: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {underscored: true});

export default Evaluation;