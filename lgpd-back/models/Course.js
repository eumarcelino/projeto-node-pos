import {DataTypes} from "sequelize";
import Sequelize from "../utils/database.js";

const Course = Sequelize.define("courses", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {underscored: true});

export default Course;