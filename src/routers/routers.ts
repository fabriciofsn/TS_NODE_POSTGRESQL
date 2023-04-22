import { Request, Response, Router } from "express";
import Livro from "../database/Livro";

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
    res.status(500).json({ error: "Erro ao criar livro" });
  }
});

module.exports = router;
