const express = require("express");
const router = express.Router();

const Bonificacao = require("../controllers/bonificacao.controller");

router.post('/bonificacao/cadastrar', Bonificacao.cadastrar);
router.get('/bonificacao/listar', Bonificacao.listar);
router.get('/bonificacao/listar/:id', Bonificacao.listar);
router.put('/bonificacao/alterar', Bonificacao.alterar);
router.delete('/bonificacao/excluir/:id', Bonificacao.excluir);

module.exports = router