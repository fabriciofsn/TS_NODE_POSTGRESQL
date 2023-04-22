"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const express = require("express");
const router = require("../routers/routers");
const server = express();
exports.server = server;
server.use(express.json());
server.set("view engine", "ejs");
server.use(express.static("public"));
server.use(body_parser_1.default.json());
server.use(body_parser_1.default.urlencoded({ extended: true }));
server.use("/", router);
server.use("/salvar", router);
