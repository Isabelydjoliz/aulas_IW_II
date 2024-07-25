// routes/index.js

const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Rota principal - Lista todos os clientes
router.get('/', clientController.index);

// Rota para exibir o formulário de adição de cliente
router.get('/add', clientController.showAddForm);

// Rota para adicionar um novo cliente
router.post('/add', clientController.addClient);

// Rota para exibir o formulário de edição de cliente
router.get('/edit/:id', clientController.showEditForm);

// Rota para editar um cliente
router.post('/edit/:id', clientController.editClient);

// Rota para deletar um cliente
router.get('/delete/:id', clientController.deleteClient);

module.exports = router;