import bodyParser from "body-parser";

const express = require("express");
const router = require("../routers/routers");
const server = express();

server.use(express.json());
server.set("view engine", "ejs");
server.use(express.static("public"));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/", router);
server.use("/salvar", router);
server.use("/livros", router);
server.use("/deletar", router);
server.use("/editar", router);
server.use("/atualizar", router);

export { server };
