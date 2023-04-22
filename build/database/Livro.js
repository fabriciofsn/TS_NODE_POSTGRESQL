"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const Sequelize = require("sequelize");
const Livro = index_1.default.define("livros", {
    isbn: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    titulo: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    ano_editora: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    autores: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
}, { tableName: "livros" });
module.exports = Livro;
