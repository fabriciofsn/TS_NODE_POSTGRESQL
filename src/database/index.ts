import { Sequelize } from "sequelize";

const sequelize: Sequelize = new Sequelize("biblioteca", "postgres", "xtm440", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
});

(async () => {
  try {
    await sequelize.sync().then(() => {
      console.log("Conectado ao postgres");
    });
  } catch (error) {
    console.log(`Ocorreu um erro ${error}`);
  }
})();

export default sequelize;
