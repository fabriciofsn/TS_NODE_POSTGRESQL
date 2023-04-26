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
  } catch (error) {
    res.send("Erro ao salvar livro!");
  } finally {
    res.redirect("/livros");
  }
});

router.get("/livros", async (req: Request, res: Response) => {
  const livros: Promise<[]> = await Livro.findAll({
    order: [["isbn", "DESC"]],
  });
  res.render("livros", { livros });
});

router.get("/deletar/:isbn", async (req: Request, res: Response) => {
  let isbn = req.params.isbn;

  try {
    await Livro.destroy({
      where: { isbn },
    });
  } catch (error) {
    res.send(`Ocorreu um erro ao deletar este livro ${error}`);
  } finally {
    res.redirect("/livros");
  }
});

router.get("/editar/:isbn", async (req: Request, res: Response) => {
  let isbn = req.params.isbn;
  try {
    const livro: Promise<[]> = await Livro.findOne({
      where: {
        isbn,
      },
    });
    res.render("editar", { livro });
  } catch (error) {
    res.send(`Ocorre um erro ao atualizar esse livro ${error}`);
  }
});

router.post("/atualizar", async (req: Request, res: Response) => {
  let { isbn, titulo, ano_editora, autores } = req.body;
  let livro = await Livro.findOne({ where: { isbn } });

  try {
    livro.update({
      titulo: titulo,
      ano_editora: ano_editora,
      autores: autores,
    });
  } catch (error) {
    res.send(`Ocorreu um erro ao atualizar este livro ${error}`);
  } finally {
    res.redirect("/livros");
  }
});

module.exports = router;
