import {DataTypes} from "sequelize";
import Sequelize from "../utils/database.js";

const User = Sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    profile_picture: DataTypes.STRING
}, {underscored: true});

export default User;