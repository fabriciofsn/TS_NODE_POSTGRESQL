import { Request, Response, Router } from "express";
const Livro = require("../database/Livro");

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.render("index");
});

router.post("/salvar", async (req: Request, res: Response) => {
  const { isbn, titulo, ano_editora, autores } = req.body;

  try {
    await Livro.create({
      isbn,
      titulo,
      ano_editora,
      autores,
    });
    res.redirect("/");
  } catch (error) {
    res.send("Erro ao salvar livro!");
  }
});

module.exports = router;
