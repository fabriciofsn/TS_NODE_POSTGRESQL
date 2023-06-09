"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const Sequelize = require("sequelize");
const Livro = index_1.default.define("biblioteca", {
    isbn: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
});
exports.default = Livro;
