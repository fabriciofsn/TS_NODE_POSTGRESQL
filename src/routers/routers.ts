import { Request, Response, Router } from "express";
const Livro = require("../database/Livro");

const router: Router = Router();

router.get("/", (req: Request, res: Response): void => {
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
    res.redirect("/livros");
  } catch (error) {
    res.send("Erro ao salvar livro!");
  }
});

router.get("/livros", async (req: Request, res: Response) => {
  const livros: Promise<[]> = await Livro.findAll();
  res.render("livros", { livros });
});

router.get("/deletar/:isbn", async (req: Request, res: Response) => {
  let isbn = req.params.isbn;

  await Livro.destroy({
    where: { isbn },
  }).then(() => {
    res.redirect("/livros");
  });
});

module.exports = router;
