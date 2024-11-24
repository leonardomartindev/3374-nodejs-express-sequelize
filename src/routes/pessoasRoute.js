const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js')

const pessoaController = new PessoaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.pegaRegistro(req,res));
router.post('/pessoas', (req, res) => pessoaController.criaRegistro(req,res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualizaRegistro(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.deletarRegistro(req, res));

module.exports = router;
