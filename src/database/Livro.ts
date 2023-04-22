import sequelize from "./index";
const Sequelize = require("sequelize");

const Livro = sequelize.define("livro", {
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
});

export default Livro;
