"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Livro = require("../database/Livro");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.render("index");
});
router.post("/salvar", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { isbn, titulo, ano_editora, autores } = req.body;
    try {
        yield Livro.create({
            isbn,
            titulo,
            ano_editora,
            autores,
        });
        res.redirect("/livros");
    }
    catch (error) {
        res.send("Erro ao salvar livro!");
    }
}));
router.get("/livros", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const livros = yield Livro.findAll();
    res.render("livros", { livros });
}));
router.get("/deletar/:isbn", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let isbn = req.params.isbn;
    yield Livro.destroy({
        where: { isbn },
    }).then(() => {
        res.redirect("/livros");
    });
}));
module.exports = router;
