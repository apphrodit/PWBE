const express = require("express");
const router = express.Router();

const Avaliacao = require("../controllers/avaliacao");

router.post('/avaliacao/cadastrar', Avaliacao.cadastrar);
router.get('/avaliacao/listar', Avaliacao.listar);
router.get('/avaliacao/listar/:id', Avaliacao.listar);
router.put('/avaliacao/alterar', Avaliacao.alterar);
router.delete('/avaliacao/excluir/:id', Avaliacao.excluir);

module.exports = router